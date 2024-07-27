const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL, {
        });
        console.log("MongoDB Connected...");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
