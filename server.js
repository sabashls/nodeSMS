var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var http = require('http');
var server = http.createServer(app);
var twilio = require('twilio');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
//app.use(session({
//    secret: 'webrtctest'
//}));
app.use(cookieParser());
var client = require('twilio')('AC49e711063559adb5d58ecda42c8ec029', '17f1a353c8c4406125ab852dcdf4ed2a');

//Send an SMS text message
client.sendMessage({

    to:'+918220384115', 
    from: '+16572178945', 
    body: 'NOdejs SMS Testing' 

}, function(err, responseData) { 

    if (!err) { 

        
        console.log("SMS send Successfully"); 

    }
    else
    {
    	console.log('Oops Error Accoured')
    }
});

client.messages.list({    
}, function(err, data) { 
	data.messages.forEach(function(message) { 
	 console.log(message.to); 
	}); 
});

app.get('/', function (req, res) {
res.sendfile('views/index.html');
})


server.listen('8088');
console.log("server listening on 8088");
