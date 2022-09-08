
// IMPORTS
const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// MIDDLEWARE
router.use('/user', userRoutes);
router.use('/post', postRoutes);

// EXPORT
module.exports = router;