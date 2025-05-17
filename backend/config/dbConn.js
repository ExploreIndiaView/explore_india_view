import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Database Connected : ", connection.connection.host);
    } catch (error) {
        console.log("Error while connecting to database", error);
        process.exit(1); // exit withfailure        
    }
};