import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
     '/api': {
        target: ' https://dev-technologies-backend.onrender.com', // Your backend
        changeOrigin: true,
        secure: false,
      },
    }
  },
  plugins: [
    react(),

 ],
})
