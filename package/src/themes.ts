const themes = ["dark", "light"] as const

export type Themes = (typeof themes)[number]

declare global {
  interface Window {
    readonly theme: Themes
  }
}

export default themes
