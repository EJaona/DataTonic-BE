const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userRouter = express.Router()


const db = require('../data/db');


const createToken = (user) => {

    payload = {

        username: user.username
    };
    
    secret = process.env.SECRET

    return jwt.sign(payload, secret, this.options)
}
 


userRouter.post('/login', async (req, res) => {

    try{

        let { name, username, password } = req.body;
    
        const user = await db
            .select()
            .from('users_data')
            .where({username: username})
            .first()

        console.log(user)
    
        if(user && bcrypt.compareSync(password, user.password)){

            const token = createToken(user)

            res
                .status(200)
                .json({ token, username })

        }else {

            res
                .status(404)
                .json({ message: 'Could not authenticate user. username or password mismatch'})
        }

    }catch(err){ 

        res
            .status(500)
            .json({ message: err.message })
    
    }

})

userRouter.post('/register', async (req, res) => {
    
    let newUser = req.body

    try {
        
        hashedPW = bcrypt.hashSync(newUser.password, 12)
        newUser.password = hashedPW;
    
        const registered = await db
            .from('users_data')
            .insert(req.body)

        const token = createToken(newUser)
        
        if (registered) {

            res
                .status(201)
                .json({ token, username: newUser.username })
        }else {

            res
                .status(400)
                .json({message: 'There was problem with creating your account'})
        }

    } catch(err) {

        res
            .status(401)
            .json({message: err.message})
 }
   
})

module.exports = userRouter;