import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

if(!MONGODB_URI) {
      console.error("MongoDB URI not found in environment variables.");
      process.exit(1);
}

mongoose
      .connect(MONGODB_URI)
      .then(() => {
        console.log("Connected to MongoDB");
       app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection error:", err));