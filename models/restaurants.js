var mongoose - require('mongoose');
var PlaceSchema = require('./places.js').schema;

var RestaurantSchema = new mongoose.Schema({
	name: String,
	place: [PlaceSchema],
	cuisine: [String],
	price: {type: Number, min: 1, max: 5}
})

module.exports = monogoose.models('Restaurant', RestaurantSchema);