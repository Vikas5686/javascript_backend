const express = require('express');
require("dotenv").config();
const app = express()
const cors = require("cors")

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log("Server start ")
})