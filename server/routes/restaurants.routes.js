const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant.model')


// GET ALL RESTAURANTS
router.get('/', (req, res) => {
    Restaurant
        .find()
        .select('name neighborhood image cuisine_type')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading restaurants', err }))
})


module.exports = router