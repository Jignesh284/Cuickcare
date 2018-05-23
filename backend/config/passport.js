var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local');
 
 passport.serializeUser(function(user, done) {
 	done(null, user.id);
 });

 passport.deserializeUser(function(id, done){
 	User.findById(id, function(err, user){
 		done(err, user); 
 	});
 });

 passport.use('local.registration', new LocalStrategy({
 		emailField: 'email',
 		nameField: 'name',
 		mobileNoField: 'mobileNumber',
 		passwordField: 'password',
 		cpasswordField: 'cpassword',
 		passReqToCallback: true

 }, function(req, name, email, mobileNumber, password, cpassword, done) {
 	User.findOne({'email': email}, function(err, user) { 
 		if(err){
 			return done(err)
 		}
 		if(user){
 			return done(null, false, {message: 'Email is already in use'})
 		}
 		var newUser = new User();
 			newUser.email = email;
 			newUser.name = name;
 			newUser.mobileNumber = mobileNumber;
 			newUser.password = newUser.encryptPassword(password);
 			newUser.save(function(err, result){
 				if(err){
 					return done(err);
 				}
 				return done(null, newUser);
 			});
    });
 })
);
