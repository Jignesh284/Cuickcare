var express = require('express');
var router = express.Router();
var passport = require('passport');
var Product = require('../models/product');
var User = require('../models/user');

var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', { title: 'Home', csrfToken: req.csrfToken() });
  
});

router.post('/user/login', function(req, res, next) {
	res.redirect('/');
}); 

// router.post('/user/registration', passport.authenticate('local.registration', {
// 	successRedirect: '/user/profile',
// 	failureRedirect: '/',
// 	failureFlash: true,
// }));


module.exports = router;
