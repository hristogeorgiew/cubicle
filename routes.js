//ще си извикаме router
const {Router} = require('express');
//създавам си инстанция на този раутър
const router = Router();


router.get('/', (req, res) => {
    res.render('home', {layout:false})
});

module.exports = router;