require('dotenv').config()
const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const jwt = require('jsonwebtoken')

const server = express()

server.get('/', (req, res) => {

    res
        .status(200)
        .json({message: 'base route hittin'})
    
})

server.use(cors())
server.use(helmet())
server.use(express.json())

module.exports = server;