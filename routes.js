//ще си извикаме router
const {Router} = require('express');
const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController');
//създавам си инстанция на този раутър
const router = Router();

router.use('/', productController);
router.use('/about', aboutController);

module.exports = router;