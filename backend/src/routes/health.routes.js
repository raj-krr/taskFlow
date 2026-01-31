import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", (req, res) => {
  const dbState = mongoose.connection.readyState;

  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database:
      dbState === 1
        ? "connected"
        : dbState === 2
        ? "connecting"
        : "disconnected"
  });
});

export default router;
