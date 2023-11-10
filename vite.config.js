import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api/v1": "https://ivm-backend.onrender.com/api/v1",
  //   },
  // },

  plugins: [react()],
});
