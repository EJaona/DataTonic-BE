const express = require('express')
const dataRouter = express.Router()

const db = require('../data/db');


dataRouter.get('/', async (req, res) => {

    try {

        const data = await db('company_data')
        res
            .status(200)
            .json({data})
    
    }catch(err) {
        res
            .status(500)
            .json({message: err.message})
    }


    
})

module.exports = dataRouter;