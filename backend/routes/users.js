pPvar express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function(req, res, next) {
  res.send('./user/profile', { title: 'Profile'});
});

router.post('/registration', function(req, res, next) {
	var name = req.body.name;
	var email = req.body.email;
	var mobileNo = req.body.mobileNumber;
	var password = req.body.password;
	var cpassword = req.body.cpassword;
	console.log(name+" "+cpassword);
	
	var newUser = new User();
	console.log(name+" "+cpassword);
	newUser.name = name;
	newUser.email = email;
	newUser.mobileNumber = mobileNo;
	newUser.password = newUser.encryptPassword(password);

	newUser.save(function(err, result){
		if(err){
			console.log("error" + err);
			return done(err);
		}
		res.redirect('/');

	})
	
});
module.exports = router;
