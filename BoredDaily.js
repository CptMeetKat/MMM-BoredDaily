/* Magic Mirror
 * Module: BoredDaily
 *
 * By CptMeetKat
 * MIT Licensed.
 */
Module.register("BoredDaily", {
   // Default module config.
   defaults: {
      boredURL: "https://www.boredapi.com/api/activity",
      updateInterval : 10, //Seconds before changeing
      type: "Welcome to BoredDaily!",
      text: "New ideas to keep your boring life fresh"
   },

   start: function() {

      this.getActivity();
      this.config.updateInterval = this.config.updateInterval * 1000

      setInterval(() => {
         this.getActivity();
      }, this.config.updateInterval);

   },


   getDom: function() {
      
      var top = document.createElement("div");
      top.className = "bored-banner"
      top.innerHTML = this.config.type;

      var bot = document.createElement("div");
      bot.className = "bored-content"
      bot.innerHTML = this.config.text;
      
      var wrapper = document.createElement("div");
      wrapper.appendChild(top)
      wrapper.appendChild(bot)

      return wrapper;
   },

   socketNotificationReceived: function(notification, payload) {
        if (notification === "ACTIVITY") {
            this.config.type = payload.type.toUpperCase() + ": ";
            this.config.text = payload.activity;
            this.updateDom(1000);
        }
    },

    getActivity: function() {
        Log.info("BORED: Getting activity.");

        this.sendSocketNotification("GET_ACTIVITY", {
            config: this.config
        });
    },

    // Define required styles.
    getStyles: function() {
        return ["bored.css"];
    }


});
