/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app =
{
    
    Initialize: function()
    {
        // Wait for the deviceready event before using any of Cordova's device APIs.
        // See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
        //window.addEventListener("orientationchange",app.myFunction);
        document.getElementById("sub").addEventListener("click",app.create);
        //document.getElementById("resets1").addEventListener("click",app.value1);
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


    onDeviceReady: function ()
    {
        this.receivedEvent('deviceready');
        //document.getElementById("hippy").addEventListener("click",app.create);
        //document.getElementById("hippy").addEventListener("click",app.dialogalert);
        //document.getElementById("hippy").addEventListener("click",app.create);
        
    },
    receivedEvent: function (id)
    {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElemnt = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        listeningElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },
    x: 0,

    create: function()
    {
        var type = window.TEMPORARY;
        var size = 5*1024*1024;
        window.requestFileSystem(type, size, successCallback, errorCallback)
     
        function successCallback(fs) {
           fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {
              alert('File creation successfull!')
           }, errorCallback);
        }
     
        function errorCallback(error) {
           alert("ERROR: " + error.code)
        }
        hello = app.submission()
        app.writeFile()
        app.readFile()
        

    },

    writeFile: function()
    {
        var type = window.TEMPORARY;
        var size = 5*1024*1024;
        window.requestFileSystem(type, size, successCallback, errorCallback)
     
        function successCallback(fs) {
           fs.root.getFile('log.txt', {create: true}, function(fileEntry) {
     
              fileEntry.createWriter(function(fileWriter) {
                 fileWriter.onwriteend = function(e) {
                    alert('Write completed.');
                 };
     
                 fileWriter.onerror = function(e) {
                    alert('Write failed: ' + e.toString());
                 };
     
                 var blob = new Blob(['hola'], {type: 'text/plain'});
                 fileWriter.write(blob);
              }, errorCallback);
           }, errorCallback);
        }
     
        function errorCallback(error) {
           alert("ERROR: " + error.code)
        }
     },

    readFile: function() 
    {
        var type = window.TEMPORARY;
        var size = 5*1024*1024;
        window.requestFileSystem(type, size, successCallback, errorCallback)
     
        function successCallback(fs) {
           fs.root.getFile('log.txt', {}, function(fileEntry) {
     
              fileEntry.file(function(file) {
                 var reader = new FileReader();
     
                 reader.onloadend = function(e) {
                    var txtArea = document.getElementById('textarea');
                    txtArea.value = this.result;
                 };
                 reader.readAsText(file);
              }, errorCallback);
           }, errorCallback);
        }
     
        function errorCallback(error) {
           alert("ERROR: " + error.code)
        }
     },

    submission: function ()
    {
        var a = document.getElementById("firstname").value;
        var b = document.getElementById("lastname").value;
        var c = document.getElementById("Age").value;
        var d = document.querySelector('input[name="gender"]').id;
        var e = document.getElementById("email").value;
        var f = document.getElementById("mobile").value;
        
        var h = document.getElementById("date").value;
        var i = document.getElementById("time").value;
        var j = document.getElementById("description").value
        var k = document.getElementById("file").value;
        let info =
        {
            Firstname: a,
            Lastname: b,
            Age: c,
            Gender: d,
            Email_ID: e,
            Mobile: f,
            //Purpose: g,
            Date: h,
            Time: i,
            Description: j
        }
        infini = JSON.stringify(info)
        //console.log(infini)
        return (infini)
        /*document.getElementById("description").value() = info*/
        
    },
    
    writeFile: function(text) 
    {
        var type = window.TEMPORARY;
        var size = 5*1024*1024;
        window.requestFileSystem(type, size, successCallback, errorCallback)
     
        function successCallback(fs) {
           fs.root.getFile('log.txt', {create: true}, function(fileEntry) {
     
              fileEntry.createWriter(function(fileWriter) {
                 fileWriter.onwriteend = function(e) {
                    alert('Write completed.');
                 };
     
                 fileWriter.onerror = function(e) {
                    alert('Write failed: ' + e.toString());
                 };
     
                 var blob = new Blob(text, {type: 'text/plain'});
                 fileWriter.write(blob);
              }, errorCallback);
           }, errorCallback);
        }
     
        function errorCallback(error) {
           alert("ERROR: " + error.code)
        }
    },
};

app.Initialize();
