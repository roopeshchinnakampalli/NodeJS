var http = require('http');

var httpServer = http.createServer(function(req, res){
    
    res.writeHead(200, {'content-type':'text/html'});
    
    res.end("<b>Hello World! </b>");
    
});

httpServer.listen(9000); //listening on Port 9000

console.log('listening on port 9000...');

