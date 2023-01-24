const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./database/dbConnection");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const authRoutes = require("./routes/auth.routes");

// Database
connectDB();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

// Routes
app.use("/user", authRoutes);

// Server Init
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
