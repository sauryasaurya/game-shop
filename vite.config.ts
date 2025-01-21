import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});

// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// // https://vitejs.dev/config/
// export default defineConfig({
// })
