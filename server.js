/*
Awsesome backend of a registration form.
Why awesome?
- source address is server side
- source password is server side (duh...)
- destinatary address is server side
- node.js
*/

var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: "magicmail@gmail.com",
		pass: "magicpassword"
	}
});
/*------------------SMTP Over-----------------------------*/


/*------------------Routing Started ------------------------*/

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/send',function(req,res){
	var mailOptions={

    	// from: req.query.subjectMail,
    	from: '' + req.query.name + '<dan.crisan@live.com>',
        to : "dan.crisan@live.com",
		subject : "My email is " + req.query.dest + " and...",
		    // plaintext body
    	text : req.query.text
    	//text: 'Hello to myself!'
		//text : req.query.text
	}
	smtpTransport.sendMail(mailOptions);
});

/*--------------------Routing Over----------------------------*/

//app.listen(8080, '45.55.67.143');
//app.listen(80,80,80,80,80,80,80,80,'www.theatremtl.com');
app.listen(port, function(){
    console.log("Express Started on Port 8080");
});
