import {connect} from "mongoose";
import logger from "../utils/Logger.js";

const dbConnect = async () => {
    try {
        if(!process.env.MONGODB_URI){
            logger.error("Mongo URI is not defined");
            process.exit(1);
        }

        if(!process.env.MONGODB_DB_NAME){
            logger.error("Mongo DB Name is not defined");
            process.exit(1);
        }

        const connecToDb = await connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB_NAME}`)

        if(connecToDb.connection.readyState!==1){
            logger.error("Failed to connect to MongoDB");
            process.exit(1);
        }

        logger.info("Connected to Database");
    } catch (error) {
        logger.error("Failed to connect to Database: ");
        process.exit(1);
    }
}

export default dbConnect;