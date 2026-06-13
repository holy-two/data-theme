import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: ["src/index.ts", "src/init.ts", "src/toggle.ts", "src/themes.ts"],
    target: "esnext",
    format: ["esm"],
    dts: true,
    clean: true,
  },
])
