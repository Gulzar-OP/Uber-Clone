const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
// const db = require('./db/db')
const connectDB = require('./db/db.js')
const app = express()
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello bhai')
});
connectDB();
module.exports = app