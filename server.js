var http = require("http");
var my_port = 8099;
var date = new Date();

var server = http.createServer(function(request, response) {
    date = new Date();
    response.writeHeader(200,{"Content-Type": "application/json"});
    response.write(JSON.stringify({ "date": date }));
    response.end();
});


server.listen(my_port);
console.log("Server is listening on port " + my_port);
