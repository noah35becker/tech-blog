
// IMPORTS
const router = require('express').Router();
const mainRoutes = require('./main-routes');
const updateUserInfoRoutes = require('./update-user-info-routes');

// MIDDLEWARE
router.use('/', mainRoutes);
router.use('/update-user-info', updateUserInfoRoutes);

// EXPORT
module.exports = router;