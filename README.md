# holy-theme

A setting for mounting themes.

## install

```bash
pnpm i @holy-two/data-theme
```

## effect

use cdn

```html
<script src="@holy-two/data-theme/dist/iife"></script>
```

or

```ts
import "@holy-two/data-theme"
```

or

```ts
import toggle from "@holy-two/data-theme"
```

or

```ts
import init from "@holy-two/data-theme/dist/init"

init()
```

## without effect

```tsx
import toggle from "@holy-two/data-theme/dist/toggle"

export default () => <button onclick={toggle}> toggle </button>
```
