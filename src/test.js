const axios = require("axios");
const express = require("express");
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const Token = require("./models/Token.model")
const login = require("./controllers/auth.controller")
const assignmentController = require("./controllers/assignment.controller")
app.use(express.json())
require("dotenv").config()
app.use(cors())
app.use(assignmentController)
app.post("/login" , login);
const port = process.env.PORT || 4000

function connect_with_db () {
    return  mongoose.connect(`mongodb+srv://rahul:${process.env.MONGO_PASSWORD}@cluster0.rxiec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

}
app.listen (port, async () => {
    await connect_with_db()
    console.log("listening on port 4000")
})