import themes from "./themes"

export default function () {
  const theme = themes.at(themes.indexOf(window.theme) - 1)
  if (theme) {
    document.documentElement.dataset["theme"] = theme
    localStorage.setItem("theme", theme)
  }
}
