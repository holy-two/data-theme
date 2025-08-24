const themes = ["dark", "light"] as const

export type Theme = (typeof themes)[number]

export function isTheme(theme?: any): theme is Theme {
  return themes.includes(theme as Theme)
}

export function isEvent(event?: any): event is CustomEvent<Theme> {
  return isTheme(((event ?? {}) as CustomEvent)?.detail)
}

declare global {
  interface Window {
    readonly theme: Theme
  }
}

export default themes
