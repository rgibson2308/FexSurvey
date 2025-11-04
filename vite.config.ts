import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { Connect } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
    middlewares: [
      {
        apply: "serve",
        handler: ((req: Connect.IncomingMessage, res, next) => {
          if (req.url?.startsWith("/api/survey") && req.method === "POST") {
            // Mock survey endpoint for development
            let body = "";
            req.on("data", (chunk) => {
              body += chunk.toString();
            });
            req.on("end", () => {
              try {
                const data = JSON.parse(body);
                console.log("Survey submission (dev mode):", data);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                  success: true,
                  message: "Survey received (dev mode). Check console for data.",
                }));
              } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
              }
            });
          } else {
            next();
          }
        }) as Connect.NextHandleFunction,
      },
    ],
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
