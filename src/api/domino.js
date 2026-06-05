import axios from 'axios'
import { APP_BASE } from '../router/routes.config'

// 開發：透過 Vite proxy 轉發，瀏覽器視為同源請求，避開 CORS
// 正式：部署在 Domino 同網域時，使用相對路徑即可
const dominoClient = axios.create({
  baseURL: import.meta.env.DEV ? '/domino-api' : '',
  withCredentials: true,
})

export const CHECK_AUTH_PATH = `${APP_BASE}CheckAuth?OpenAgent`

export function checkAuth() {
  return dominoClient.get(CHECK_AUTH_PATH)
}

// Domino Agent 成功時回傳：{"status": "OK", "message": "Authenticated"}
export function parseAuthResponse(data) {
  if (typeof data === 'string') {
    try {
      return JSON.parse(data.trim())
    } catch {
      return null
    }
  }

  return data ?? null
}

export function isAuthOk(data) {
  const payload = parseAuthResponse(data)
  return payload?.status === 'OK'
}
