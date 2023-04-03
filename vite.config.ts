import path from 'node:path'
import { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const configuration: UserConfig = {
  plugins: [react()],
  resolve:{
    alias:{
        '@': path.resolve(__dirname, "./src"),
        $components: path.resolve(__dirname, "./src/components"),
        $test: path.resolve(__dirname, "./src/test")
    }
  }
}

export default configuration;
