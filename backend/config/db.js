const path = require('path');
const mongoose = require('mongoose')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const url = process.env.MONGO_URI

async function connectDB() {
    try {
        const conn = await mongoose.connect(url, { useNewUrlParser: true});
        console.log(`Connected to Mongo: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB 