const express = require("express")
const cors = require('cors');

// const usersRouter = require("./Routes/users")
const categoryRouter = require("./Routes/Categories")

const app = express()
app.use(cors());
app.use(express.json())

const baseUrl = "/api/v1"
// app.use(`${baseUrl}/users`, usersRouter )
app.use(`${baseUrl}/category`, categoryRouter )

module.exports = app