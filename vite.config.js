// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: "app.js",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        
        crearVehiculo: resolve(__dirname, "create-v.html"),
        
        crearPlantillas: resolve(__dirname, "create-p.html"),
      },
    },
  },
});