import express, { type Express } from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { handleSurvey } from "./routes/survey";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createServer(): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Serve static files from the spa directory
  const spaPath = path.join(__dirname, "../dist/spa");
  app.use(express.static(spaPath));

  // API routes
  app.post("/api/survey", handleSurvey);

  // Serve index.html for all other routes (SPA fallback)
  app.get("*", (req, res) => {
    res.sendFile(path.join(spaPath, "index.html"));
  });

  return app;
}

const server = createServer();
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
