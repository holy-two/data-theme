import themes from "./themes"

export default function () {
  Object.defineProperty(window, "theme", {
    get: () =>
      localStorage.getItem("theme") ??
      themes[+!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches],
  })
  document.documentElement.dataset["theme"] = window.theme
}
