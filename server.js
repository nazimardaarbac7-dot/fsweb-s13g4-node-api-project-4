require("dotenv").config()

const express = require("express")
const cors = require("cors")
const { logger } = require("./middleware/middleware")
const server = express()

server.use(cors())
server.use(logger)
server.use(express.json())

const apiRoutes = require("./routes/api_router")

server.use("/api",apiRoutes)

module.exports = server