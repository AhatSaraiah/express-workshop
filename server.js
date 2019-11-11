 var fs = require('fs');
		var express = require('express');
		var formidable = require('express-formidable');
		var app = express();
		// require stuff above

		app.use(formidable());

		// endpoint stuff below


		app.use(express.static("public"));

		app.post('/create-post', function (req, res) {
		   console.log("the blog created successfuly!");
			console.log(req.body);
			console.log(req.fields);
		    var fileParsed=JSON.stringify(req.fields);

		fs.readFile(__dirname + '/data/posts.json', function (error, file) {

			   var parsedFile = JSON.parse(file);
			   parsedFile[Date.now()] = req.fields["blogpost"];
	           var newfile=JSON.stringify(parsedFile);
			    console.log(parsedFile);
			    fs.writeFile(__dirname + '/data/posts.json',newfile , function (error) {
			});

			});

			
			console.log(fileParsed);
		});
	            
			  //  app.get('/post-container', function (req, res) {
			   //     res.send(fileParsed);
			  //  });
	            
		app.listen(3000, function () {
		  console.log('Server is listening on port 3000. Ready to accept requests!');
		});
