
// IMPORTS
const router = require('express').Router();
const userRoutes = require('./user-routes');

// MIDDLEWARE
router.use('/user', userRoutes);

// EXPORT
module.exports = router;