const mongoose = require("mongoose");

// Replace <your-connection-string> with your actual MongoDB connection string
const dbURI =
  "mongodb+srv://admin:AGX5XmxvS5gzGAt6@cluster1.aimfrtc.mongodb.net/jobseeker?retryWrites=true&w=majority";

// Connect to the MongoDB database
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection status
db.on("connected", () => {
  console.log("Connected to the database");
});

db.on("error", (err) => {
  console.error("Error connecting to the database:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from the database");
});

// Export the database connection
module.exports = db;
