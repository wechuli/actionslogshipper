import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const healthRouter = Router();

healthRouter.get("/health", (_req, res) => {
  res.status(StatusCodes.OK).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  });
});

healthRouter.get("/ready", (_req, res) => {
  // Add any readiness checks here (DB connection, external services, etc.)
  res.status(StatusCodes.OK).json({
    status: "ready",
    timestamp: new Date().toISOString(),
  });
});

export default healthRouter;
