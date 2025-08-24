import { Theme, isTheme, isEvent } from "./themes"
import themes from "./themes"

export default function (
  theme?: Theme | CustomEvent<Theme> | Event,
  root: HTMLElement = document.documentElement
) {
  if (!isTheme(theme)) {
    if (isEvent(theme)) {
      theme = theme.detail
    } else {
      theme = themes.at(themes.indexOf(window.theme) - 1) as Theme
    }
  }
  root.dataset["theme"] = theme
  localStorage.setItem("theme", theme)
}
