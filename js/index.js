var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: initApp
};

function initApp() {
	console.log("howdy.");
	document.body.style.backgroundColor = "#eee";
	
	document.getElementById("vibrateLink").onclick = function() {
		navigator.notification.vibrate( 1000 );
		document.body.style.backgroundColor = "#fff";
		return false;
	}
	
	document.getElementById("beepLink").onclick = function() {
		navigator.notification.beep( 5 );
		document.body.style.backgroundColor = "#faf";
		return false;
	}
}