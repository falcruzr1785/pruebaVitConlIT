// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: "src/get-List.js",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        
        crearVehiculo: resolve(__dirname, "create-V.html"),

        crearPlantillas: resolve(__dirname, "create-p.html"),
      },
    },
  },
});