import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const connectToDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        if (connection) {
            console.log(`✅ Connected to MongoDB: ${connection.host}`);
            console.log(`📊 Database: ${connection.name}`);
            console.log(`🔗 Connection State: ${connection.readyState}`);
        }
    } catch (e) {
        console.log("db connection failed", e);
        process.exit(1);
    }
}
export default connectToDb