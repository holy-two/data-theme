const themes = ["dark", "light"] as const

export type Theme = (typeof themes)[number]

declare global {
  interface Window {
    readonly theme: Theme
  }
}

export default themes
