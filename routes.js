//ще си извикаме router
const {Router} = require('express');
const productController = require('./controllers/productController');
const homeController = require('./controllers/homeController');
//създавам си инстанция на този раутър
const router = Router();

router.use('/', homeController);
router.use('/products', productController);
router.get('*', (req, res) => {
    res.render('404.hbs');
    return;
})

module.exports = router;