// ENV variables
require("dotenv").config()

import express from 'express'
import config from 'config'
import db from '../config/db'

const app = express()

// JSON middleware
app.use(express.json())

// App port
const port = config.get<number>("port")

// Routes
import router from './router'

// Logger
import Logger from '../config/logger'

// Milddewares
import morganMiddleware from './middleware/morganMiddleare'

app.use(morganMiddleware)

app.use('/api',router)

app.listen(port, async () => {
    await db()
    Logger.info("App rodando")
})