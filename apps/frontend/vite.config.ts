import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,                // Ensure your project runs on port 3000
    host: "0.0.0.0",           // Allow external access (important for EC2)
    strictPort: true,          // Ensure Vite only runs on the specified port
    allowedHosts: ["ec2-54-221-74-17.compute-1.amazonaws.com","smartgig.messagemate.site"]  // Allow EC2 host
  }
})