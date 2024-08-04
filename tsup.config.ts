import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: ["src/index.ts"],
    target: "esnext",
    format: ["esm", "iife"],
    dts: true,
    sourcemap: true,
    clean: true,
  },
  {
    entry: ["src/init.ts"],
    target: "esnext",
    format: ["esm"],
    dts: true,
    clean: true,
  },
  {
    entry: ["src/toggle.ts"],
    target: "esnext",
    format: ["esm"],
    dts: true,
    clean: true,
  },
])
