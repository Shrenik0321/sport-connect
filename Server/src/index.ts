import express, { Request, Response, NextFunction, Errback } from "express";
import { SERVER_PORT } from "./config/envConfig.js";
import connectDb from "./config/dbConfig.js";
import adminRoutes from "./api/routes/adminRoutes.js";

const app = express();
app.use(express.json());

// Defining Routes
app.use("/api/admin", adminRoutes);

// Global Error Handling
app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Uh oh! An unexpected error occured.");
});

app.listen(SERVER_PORT, async () => {
  connectDb();
  console.log(`Server listening on port ${SERVER_PORT}`);
});
