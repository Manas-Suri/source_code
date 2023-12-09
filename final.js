var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		//window.addEventListener("orientationchange", app.myFunction);
		document.getElementById("sub").addEventListener("click",app.printex);
		app.initTimer();		
		
    },
    printex: function ()
    {
        tex = "C:\Users\Manas\eclipse-workspace\Cordova_directory\Counr\www\document.doc"
        var qrc = new QRCode(document.getElementById("qrcode"), {
            text:tex,
            width: 100,
            height: 100,
        });
        var message = "I am Alert Dialog!";
        var title = "ALERT";
        var buttonName = "Alert Button";
        navigator.notification.alert(qrc,message, title, buttonName);  
        app.vibration
    },

    dialogalert: function()
    {
        // var qrc = new QRCode("hello", {
        //     text:tex,
        //     width: 100,
        //     height: 100,
        // }); 
        
        var message = "I am Alert Dialog!";
        var title = "ALERT";
        var buttonName = "Alert Button";
        navigator.notification.alert(message, title, buttonName);
    },


	dialogalert: function()
    {
        // var qrc = new QRCode("hello", {
        //     text:tex,
        //     width: 100,
        //     height: 100,
        // }); 
        console.log("a")
        var message = "I am Alert Dialog!";
        var title = "ALERT";
        var buttonName = "Alert Button";
        navigator.notification.alert(message, title, buttonName);
    },


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
	
	};

app.initialize();