import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

async function connectToMongo(){
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connection established")
    }
    catch (error){
        console.error("Connection failed")
    }

}

export {connectToMongo}