import { checkAuth, isAuthOk } from '../api/domino'
import { createRouter, createWebHashHistory } from 'vue-router'
import { APP_BASE, routeDefinitions } from './routes.config'

const viewModules = import.meta.glob('../views/*.vue')

const routes = routeDefinitions.map(({ path, name, view }) => ({
  path,
  name,
  component: viewModules[`../views/${view}.vue`],
}))

const router = createRouter({
  history: createWebHashHistory(APP_BASE),
  routes,
})

// 每次使用者點擊選單「換頁前」，這段程式碼都會先被攔截執行
router.beforeEach(async (to) => {
  // 如果是去不需要登入的公開頁面（例如自訂的公開宣告），可以放行
  // if (to.path === '/public') return

  try {
    // 【敲門驗證】發送一個輕量請求給 Domino
    // 開發時經 Vite proxy 轉發至 www.xred.com.tw，避開瀏覽器 CORS 限制
    const { data } = await checkAuth()
    // 預期回應：{ status: "OK", message: "Authenticated" }
    if (!isAuthOk(data) && !import.meta.env.DEV) {
      console.error('[ACL 路由攔截] 驗證未通過，未登入或Session已失效')
      // window.location.reload()
      return false
    }

    // status === "OK"，放行換頁
  } catch (error) {

    console.log("這裡是errot ",error)
    // 萬一使用者已登出、或是 Session 逾期，Domino ACL 會直接回傳 401 錯誤
    console.error('[ACL 路由攔截] 偵測到無權限或 Session 已失效！')
    return false
  }
})

export default router
