var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tripplanner');

mongoose.connection.on('error', console.error.bind(console, "This was an error"));

module.exports = {
	Hotel: require('./hotels.js'),
	Activity: require('./activities.js'),
	Restaurant: require('./restaurants.js'),
	Place: require('./places.js')
}