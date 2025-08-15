import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
     '/api': {
        target: "https://dev-technologies-backend-1.onrender.com", // ✅ backend URL
        changeOrigin: true,
        secure: false,
      },
    }
  },
  plugins: [
    react(),

 ],
})
