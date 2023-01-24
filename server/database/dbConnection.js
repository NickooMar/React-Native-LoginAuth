const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => console.log(`Database connection done`))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
