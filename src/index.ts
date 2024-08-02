Object.defineProperty(window, "theme", {
  get: () =>
    localStorage.getItem("theme") ??
    ["dark", "light"][
    +!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ],
});

document.documentElement.dataset["theme"] = window.theme;

export { };
declare global {
  interface Window {
    theme: string;
  }
}