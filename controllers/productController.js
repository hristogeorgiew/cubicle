const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.render('home.hbs');
 });

 

router.get('/create', (req, res) => {
   res.render('create.hbs');
});


module.exports = router;