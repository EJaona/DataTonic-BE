require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');

const server = express();

server.get('/', (req, res) => {

    res
        .status(200)
        .json({message: 'base route hittin'})
    
});

// we need restricted middleware for secured route (dataRouter)

const restricted = (req, res, next) => {

    null
}
// userRouter => route for login ( +auth )
// dataRouter => route for getting all data ( secured route )

server.use(cors());
server.use(helmet());
server.use(express.json());

module.exports = server;