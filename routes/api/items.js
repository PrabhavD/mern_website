const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// route:           GET request to api/items
// description:     Get All Items
// access:          Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1}) //descending order = -1, ascending = 1
        .then(items => res.json(items))
});

module.exports = router;