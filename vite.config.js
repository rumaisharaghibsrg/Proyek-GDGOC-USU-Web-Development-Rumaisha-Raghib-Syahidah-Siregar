import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Proyek-GDGOC-USU-Web-Development-Rumaisha-Raghib-Syahidah-Siregar/",
  plugins: [
    react(),
    tailwindcss()
  ],
})