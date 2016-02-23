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
var client = require('twilio')('accid', 'acctoken');

//Send an SMS text message
client.sendMessage({

    to:'+918833XXXXXX', 
    from: '+9283XXXXXXXXX', 
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
