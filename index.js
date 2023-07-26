require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const PORT = process.env.port || 5000;
const app = express();
const router = require('./router/index')
const errorMiddleware = require('./middleware/error-middleware')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        app.listen(PORT, async () => {
            await mongoose.connect(process.env.DB_URL)
            console.log('OK')
        })
    } catch (e) {

    }
}

start();
