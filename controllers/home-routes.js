
// IMPORTS
const router = require('express').Router();
const sequelize = require('../config/connection');



// Home page
router.get('/', (req, res) => {
    res.render('homepage');
});



// EXPORT
module.exports = router;