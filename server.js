// Imported dependencies
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const db = require('./data/db');
const express = require('express');
const jwt = require('jsonwebtoken');

// Local dependencies
const userRoute = require('./Routes/userRouter');
const dataRouter = require('./Routes/dataRouter');

const server = express();

// Custom Middleware
const restricted = (req, res, next) => {

    const token = req.headers.Authorization;

    if (token){

        jwt.verify(token, process.env.SECRET, ( err, decodeToken ) => {
            if(err){

                res
                    .status(401)
                    .json({message: 'There was an error verifying your account'})
            }else {
                req.decodeToken = decodeToken
                next()
            }
        })
    }else {

        console.log('no token')
        
        res
            .status(404)
            .json({message: 'Looks like you are missing a token in your authorization header. Did you already lose the one we gave you?'})
    }
}

server.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Base route test
server.get('/', async (req, res) => {
    
    res
        .status(418)
        .json({
            message: "looks like you're a little teapot...good luck with that",
            postMessage: 'But yea, the api is working'
        })

    
    
});

// Middleware 
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api/users', userRoute)
server.use('/api/data', restricted, dataRouter)



module.exports = server;