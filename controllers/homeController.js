const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.redirect('/products');
    //res.render('home.hbs', {title: 'Home'});
});

router.get('/about', (req, res) => {
    res.render('about.hbs', {title: 'About'});
});

module.exports = router;