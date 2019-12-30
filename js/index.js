var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

var phonegapApp = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        if (isIOS() || isAndroid()) {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },
    onDeviceReady: function () {
        window.open = cordova.InAppBrowser.open;
        navigator.splashscreen.hide();
    },
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    }
};

function isAndroid() {
    return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
    return navigator.userAgent.match(/(iPad|iPhone|iPod)/i) !== null;
}