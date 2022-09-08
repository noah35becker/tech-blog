
// IMPORTS
const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard');
const apiRoutes = require('./api');

// MIDDLEWARE
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use((req, res) => res.status(404).redirect('/'));

// EXPORT
module.exports = router;