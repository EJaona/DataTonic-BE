// Imported dependencies
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const db = require('./data/db');
const express = require('express');

// Local dependencies
const userRoute = require('./Routes/userRouter');
const dataRouter = require('./Routes/dataRouter');

const server = express();

// Middleware 
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api/users', userRoute)
// server.use('/api/data', dataRouter)
// Custom Middleware



// Request handlers
server.get('/', async (req, res) => {
    console.log(req.url)
    try{

        const data = await db('company_data')
        res
            .status(200)
            .json({data})

    }catch(err){
        console.log(err.message)
    }

    
    
});



module.exports = server;