var data = require("../data.json");

exports.addFriend = function(req, res) {    
	req.query.name;
	req.query.description;
	var newFriend = {name: req.query.name, description: req.query.description, imageURL:"http://lorempixel.com/400/400/people"};
	console.log();
	data.friends.push(newFriend);
 }