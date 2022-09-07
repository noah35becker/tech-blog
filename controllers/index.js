
// IMPORTS
const router = require('express').Router();
const homeRoutes = require('./home-routes');

// MIDDLEWARE
router.use('/', homeRoutes);
router.use((req, res) => res.status(404).redirect('/'));

// EXPORT
module.exports = router;