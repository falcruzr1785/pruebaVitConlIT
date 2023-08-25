// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // Cuando haces una solicitud a /api en tu servidor local, se redirige a la API de NHTSA
      "/api": "https://vpic.nhtsa.dot.gov",
    },
  },           
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
