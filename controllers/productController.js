const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.render('home.hbs', {title: 'Browse'});
 });

router.get('/create', (req, res) => {
   res.render('create.hbs', {title: 'Create'});
});

router.post('/create', (req, res) => {
    console.log(req.body);

    res.redirect('/products');
});

router.get('/details/:productId', (req, res) => {
    res.render('details.hbs', {title: 'Details'});
});

module.exports = router;