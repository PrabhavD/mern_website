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

// route:           POST request to api/items
// description:     Create an item
// access:          Public  -> make private later when adding auth
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name //date is automatically inserted
    });

    newItem.save().then(item => res.json(item));
});

// route:           DELETE request to api/items:id
// description:     Delete an item
// access:          Public  -> make private later when adding auth
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .them(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({sucess: false}));
})

module.exports = router;