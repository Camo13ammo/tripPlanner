var mongoose = require('mogoose');

mongoose.connect('mongodb://localhost/tripplanner');

mongoose.connection.on('error', console.error.bind(console, "This was an error"));

module.exports = {
	Hotel: require('./hotels'),
	Activity: require('./activities'),
	Restaurant: require('./restaurants'),
	Place: require('./places');
}