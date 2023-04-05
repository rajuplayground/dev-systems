import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";
import path from "node:path";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: path.resolve(__dirname, "./src/test/setup.ts"),
      environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
      coverage: {
        statements: 80.59,
        thresholdAutoUpdate: true,
        include: ["src/**/*"],
        exclude: [
          "test/**",
          "vite.*.ts",
          "**/*.d.ts",
          "**/*.test.*",
          "**/*.config.*",
          "**/snapshot-tests/**",
          "**/coverage/**",
        ],
        all: true,
      },
    },
  })
);
