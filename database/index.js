const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

async function connectDB() {
    try {
        // await mongoose.connect(process.env.MONGODB_URL);
        await mongoose.connect("mongodb+srv://sanojkumary:sanojkumaryadav@cluster0.r1djb.mongodb.net/?retryWrites=true&w=majority");
        console.log('Connected to MongoDB Atls');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {connectDB};
