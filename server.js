const express = require('express');
const mongoose = require('mongoose');
const userModel = require("./models/userModel");
const userRouter = require('./routers/userRouter');
const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connecté au server sur le port 3000");
    }
})

mongoose.connect("mongodb://localhost:27017/mutest")

