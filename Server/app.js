// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
// import reservationRouter from "./routes/reservationRoute.js";
// import { dbConnection } from "./database/dbConnection.js";

// // dotenv.config();
// const app = express();
// dotenv.config({ path: "./config/.env" });
// // console.log("MongoDB URI:", process.env.MONGO_URI);
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/reservation", reservationRouter);
// app.get("/", (req, res, next)=>{return res.status(200).json({
//   success: true,
//   message: "HELLO WORLD AGAIN"
// })})

// dbConnection();

// app.use(errorMiddleware);

// export default app;


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

// Load environment variables from .env file
dotenv.config({ path: "./config/.env" });

const app = express();

// Enable CORS with proper configurations
app.use(
  cors({
    origin: process.env.Frontend_URL, // Ensure FRONTEND_URL is correctly set in the .env file
    methods: ["POST"], // Include other methods if needed, e.g., ["GET", "POST", "PUT", "DELETE"]
    credentials: true, // Allow cookies/credentials
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
dbConnection();

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Error Handling Middleware
app.use(errorMiddleware);

// Export the app for use in other files
export default app;