var request = require('request');
var NodeHelper = require("node_helper");


module.exports = NodeHelper.create({
	
	start: function() {
		console.log("Starting node helper: " + this.name);
		
	},
	
	socketNotificationReceived: function(notification, payload) {

		var self = this;
		console.log("Notification: " + notification + " Payload: " + JSON.stringify(payload));
		
		if(notification === "GET_ACTIVITY") {
			
			var boredURL = payload.config.boredURL;
			
			request({
					  url: boredURL,
					  agentOptions: {
					  rejectUnauthorized: false
					  }
					}, function (error, response, body) {

				if (!error && response.statusCode == 200) {


					// console.log("(BORED) RESPONSE: " + JSON.stringify(response.body));
					self.sendSocketNotification("ACTIVITY", JSON.parse(body));


				}
			});
		}
	}


});
