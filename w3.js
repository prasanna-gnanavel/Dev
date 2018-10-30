var v_http = require('http');


myDateTime = function () {
    return Date();
};

v_http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello webservesr!');
	res.end('another line');
	
	
	
}).listen(8081);