const themes = ["dark", "light"] as const

declare global {
  interface Window {
    readonly theme: (typeof themes)[number]
  }
}

export default themes
