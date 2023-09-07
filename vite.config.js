import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "/Portfolio",

  server: {
    host: "0.0.0.0",
  },

  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(path.join(__dirname, "src/")),
      },
    ],
  },
});
