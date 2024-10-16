# @holy-two/data-theme

set global theme variable `theme: 'light'|'dark'`

It is stored in `document.documentElement.dataset` and `localStorage`

## install

```bash
pnpm i @holy-two/data-theme
```

## use

You need to prevent [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) yourself.

If you don't care:

```tsx
// implicit call => (await import("@holy-two/data-theme/dist/init"))()
import toggle from "@holy-two/data-theme"

export default () => <button onclick={toggle}> toggle </button>
```

## iife

In [Astro](https://astro.build/) it's easy:

```astro
---
import iife from "@holy-two/data-theme/dist/iife?url"
---

<script is:inline fetchpriority="high" src={iife}></script>
```

In [Vite](https://vite.dev/) you need [`vite-plugin-insert-html`](https://github.com/NotWoods/vite-plugin-insert-html) :

```ts
// vite.config.ts
import { defineConfig } from "vite"
import { insertHtml as insert, h } from "vite-plugin-insert-html"
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

export default defineConfig({
  plugins: [
    insert({
      head: [
        h(
          "script",
          { type: "text/javascript" },
          readFileSync(
            fileURLToPath(
              import.meta.resolve("@holy-two/data-theme/dist/iife/index.js")
            ),
            "utf8"
          )
        ),
      ],
    }),
  ],
})
```

## without effect

```tsx
import toggle from "@holy-two/data-theme/dist/toggle"

export default () => <button onclick={toggle}> toggle </button>
```
