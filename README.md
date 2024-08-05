# holy-theme

A setting for mounting themes.

## install

```bash
pnpm i @holy-two/data-theme
```

## use

You need to prevent [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) yourself. In [Astro](https://astro.build/) it's easy:

```tsx
// => (await import("@holy-two/data-theme/dist/init"))()
import toggle from "@holy-two/data-theme"

export default () => <button onclick={toggle}> toggle </button>
```

## iife

```astro
---
import iife from "@holy-two/data-theme/dist/iife?url"
---

<script is:inline fetchpriority="high" src={iife}></script>
```

## without effect

```tsx
import toggle from "@holy-two/data-theme/dist/toggle"

export default () => <button onclick={toggle}> toggle </button>
```
