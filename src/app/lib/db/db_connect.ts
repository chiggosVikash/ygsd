import mongoose, {Connection} from "mongoose";

const MONGODB_URI = process.env.MONGO_URL;

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}


export async function dbConnect() {
     // If a cached connection exists, return it
  if (cachedConnection || mongoose.connection.readyState >= 1) {
    console.log("Using cached db connection");
    return cachedConnection;
  }

  try {
    // If no cached connection exists, establish a new connection to MongoDB
    const cnx = await mongoose.connect(MONGODB_URI!);
    // Cache the connection for future use
    cachedConnection = cnx.connection;
    // Log message indicating a new MongoDB connection is established
    console.log("New mongodb connection established");
    // Return the newly established connection
    return cachedConnection;
  } catch (error) {
    // If an error occurs during connection, log the error and throw it
    console.log(error);
    throw error;
  }
}
