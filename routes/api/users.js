const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

//User Model
const User = require('../../models/User');

// route:           POST request to api/users
// description:     Register new user
// access:          Public
router.post('/', (req, res) => {
    const { name, email, password} = req.body;

    //Simple validation
    if(!name || !email || !password) {
        return res.status(400).json( { msg: 'Plese enter all fields'});
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => { 
            if(user) return res.status(400).json({ msg: 'User already exists'});

            const newUser = new User({
                name, 
                email,
                password,
            });

            
        })
});

module.exports = router;