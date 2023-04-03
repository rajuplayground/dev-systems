import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'
import path from 'node:path'

export default mergeConfig(viteConfig, defineConfig({
    resolve:{
        alias:{
            $test: path.resolve(__dirname, "./src/test")
        }
      },
  test: {
    globals: true,
    setupFiles: path.resolve(__dirname, './src/test/setup.ts'),
    environmentMatchGlobs: [
        ['**/*.test.tsx', 'jsdom']
      ]
  },
}))
