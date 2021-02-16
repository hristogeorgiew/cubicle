const {Router} = require('express');
const productService = require('../services/productService');
const router = Router();


router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home.hbs', {title: 'Browse', products: products});
 });

router.get('/create', (req, res) => {
   res.render('create.hbs', {title: 'Create'});
});

router.post('/create', (req, res) => {
    //validate imputs трябва задължително да имаме валидиране
   

    productService.create(req.body);

    res.redirect('/products');
});

router.get('/details/:productId', (req, res) => {
    res.render('details.hbs', {title: 'Details'});
});

module.exports = router;