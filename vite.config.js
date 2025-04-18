import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '192.168.1.128', // Your local IP
    port: 5173,            // Optional: specify a port
  },
})
