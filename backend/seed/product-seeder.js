var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projectX');
var products = [new Product({
								imagePath: 'first',
								title: 'first',
								description: 'first',
								price: 10

							}),
				 new Product({
								imagePath: 'SECOND',
								title: 'SECOND',
								description: 'SECOND',
								price: 20

							})
				]
var done =0;
for(var i=0; i<products.length; i++ ){
	products[i].save(function(err, result){
		done++;
		if(done === products.length){
			exit();
		}

	});
}
function exit() {
	mongoose.disconnect();
}
