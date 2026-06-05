// 新增頁面只需改這裡 + 建立對應的 views/XxxView.vue
export const APP_BASE = '/testleon/dominovue.nsf/'

export const routeDefinitions = [
  { path: '/', name: 'home', label: '首頁', view: 'HomeView' },
  { path: '/game', name: 'game', label: '遊戲', view: 'GameView' },
  { path: '/rules', name: 'rules', label: '規則', view: 'RulesView' },
  { path: '/history', name: 'history', label: '紀錄', view: 'HistoryView' },
  { path: '/settings', name: 'settings', label: '設定', view: 'SettingsView' },
  { path: '/about', name: 'about', label: '關於', view: 'AboutView' },
]
