// express router
const router = require('express').Router();

// import api routes
const userRoutes = require('./userRoutes.js');
const attractionRoutes = require('./attractionRoutes.js');
const categoryRoutes = require('./categoryRoutes.js');
const typeRoutes = require('./typeRoutes.js');
const searchRoutes = require('./searchRoutes.js');

// tell router to use api routes
router.use('/user', userRoutes);
router.use('/attractions', attractionRoutes);
router.use('/categories', categoryRoutes);
router.use('/types', typeRoutes);
router.use('/search', searchRoutes);

// export router with all api routes
module.exports = router;
