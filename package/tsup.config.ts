import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: ["src/index.ts"],
    target: "esnext",
    format: ["iife"],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: "terser",
    legacyOutput: true,
  },
  {
    entry: ["src/index.ts", "src/init.ts", "src/toggle.ts"],
    target: "esnext",
    format: ["esm"],
    dts: true,
    clean: true,
  },
])
