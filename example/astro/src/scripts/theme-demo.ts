// 主题切换逻辑
function updateThemeDisplay() {
  const el = document.getElementById("current-theme")
  if (el) el.textContent = window.theme

  // 同步 switch 状态
  const toggle = document.getElementById("theme-toggle") as HTMLInputElement
  if (toggle) {
    toggle.checked = window.theme === "dark"
  }
}

// 初始化
updateThemeDisplay()

// 绑定 switch
document.getElementById("theme-toggle")?.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement
  const newTheme = target.checked ? "dark" : "light"
  localStorage.setItem("theme", newTheme)
  document.documentElement.dataset.theme = newTheme
  updateThemeDisplay()
})

// 监听 theme 变化（同步 switch 状态）
const observer = new MutationObserver(() => updateThemeDisplay())
observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
