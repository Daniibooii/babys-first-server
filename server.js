var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {
    response.end("You have nice hair: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});

var http = require("http");

var PORT = 7500;

function handleRequest(request, response) {
    response.end("You need to lose weight " + request.url);
}

var server = http.createServer(handleRequest);
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
