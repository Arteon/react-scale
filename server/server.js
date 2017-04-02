import express from 'express'
import socketIO from 'socket.io'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import config from './config'
import jwt from 'express-jwt'
import socketHandler from './io'

// Routes
import API from './api'


const app = express()
const server = require('http').Server(app)
const io = socketIO(server)
const {port} = config
const {authRoute} = API

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(compression())
app.use(jwt(config.jwt))
app.disable('x-powered-by')

app.use('/auth', authRoute)

app.get('*', (req, res) => {
    res.send('Server works')
})


server.listen(port, () => {
    console.log(`> App is listening on ${port}.`)
})

io.on('connection', socketHandler)
