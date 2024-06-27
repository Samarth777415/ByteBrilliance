 import mongoose from "mongoose";


export const connectToDb = async () => {   
    try {
        
      const db=  await mongoose.connect(process.env.MONGOURL);
    } catch (error) {
        console.error('Failed to connect to DB', error);
        return null;
    }
};