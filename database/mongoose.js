import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI 

try {
    mongoose.connect(
        MONGO_URI,
        {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        }
    );

    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("database connected...");
    });

    connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}
