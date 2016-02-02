var mongoose - require('mongoose');
var PlaceSchema = require('./places.js').schema;

var ActivitySchema = new mongoose.Schema({
	name: String,
	place: [PlaceSchema],
	age_rage: String
})

module.exports = monogoose.models('Activity', ActivitySchema);