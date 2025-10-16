import express from "express";
import helmet from "helmet";
import { pino } from "pino";
import cors from "cors";
import requestLogger from "./common/middleware/requestLogger";
import errorHandler from "./common/middleware/errorHandler";

const logger = pino({ name: "server start" });
const app = express();

// Middleware setup
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Request logging middleware
app.use(requestLogger);

// Routes

// Error handling middleware
app.use(errorHandler());

export { app, logger };
