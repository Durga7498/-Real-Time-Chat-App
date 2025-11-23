import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		if (!process.env.MONGO_DB_URI) {
			throw new Error("MONGO_DB_URI is not defined in environment variables");
		}

		const conn = await mongoose.connect(process.env.MONGO_DB_URI);
		console.log(`✅ Connected to MongoDB: ${conn.connection.host}`);
	} catch (error) {
		console.error("❌ Error connecting to MongoDB:", error.message);
		process.exit(1); // Exit process if database connection fails
	}
};

export default connectToMongoDB;
