import app from './app';
import mongoose from "mongoose";
import config from "./config";

// Connect to MongoDB Atlas
mongoose
  .connect(config.MONGODB_URI as string)
  .then(() => console.log("✅ Database connceted successfully "))
  .catch((err) => console.log(`❌ Unable to connect MongoDB ${err}`));


const server = app.listen(config.PORT, () => {
  console.log(`📍 Server is running on port ${config.PORT}`);
});

// Ensures that unhandled Promise rejections are caught
process.on("unhandledRejection", (error) => {
  console.log(`❌ Unhandled Reject is closing the server  ${error}`);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});