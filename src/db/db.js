import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectdb = async()=>{
    try {
        const connect_instance = await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
        console.log(`MongoDB connected !! db host : ${connect_instance.connection.host}`);
        
    } catch (error) {
        console.error("Mongodb connection failed",error)
        process.exit(1)

    }
}

export default connectdb