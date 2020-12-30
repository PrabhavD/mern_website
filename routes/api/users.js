const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User');

// route:           GET request to api/users
// description:     Register new user
// access:          Public
router.get('/', (req, res) => {
    res.send('register');
});

module.exports = router;