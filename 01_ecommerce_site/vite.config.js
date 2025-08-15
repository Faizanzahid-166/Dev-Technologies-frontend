import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
     '/api': {
        target: 'https://dev-technologies-frontend.vercel.app', // Your backend
        changeOrigin: true,
        secure: false,
      },
    }
  },
  plugins: [
    react(),

 ],
})
