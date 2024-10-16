# example for [`vite`](https://vitejs.dev/)

This example does not circumvent [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)

It is better than simplicity

if you care, you need [`vite-plugin-insert-html`](https://github.com/NotWoods/vite-plugin-insert-html) :

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

Even so, FOUC occurs in development mode, this is because of css in js

Unless you build
