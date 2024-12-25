require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRouter = require("./routes/auth.routes");

const app = express();
const PORT = process.env.SERVER_PORT || 3001;
const main = async () => {
    try {
        // Connect to DB
        await connectDB();
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        // Middlewares
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        
        app.use("/auth", authRouter);
        
    } catch (error) {
        console.error('Error in main function:', error);
    }
};

(async () => {
  try {
    // Run the main function
    await main();
  } catch (error) {
    console.error('Error starting the server:', error);
  }
})();