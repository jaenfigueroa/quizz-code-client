import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv' /* DOTENV */
dotenv.config() /* DOTENV */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  define: { /* DOTENV */
    'process.env': process.env /* DOTENV */
  }
})
