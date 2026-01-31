import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://task-flow-five-pi.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/health", healthRoutes);

export default app;
