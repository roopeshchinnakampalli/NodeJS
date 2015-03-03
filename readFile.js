var http = require('http');
var fs = require('fs');

var httpServer = http.createServer(function(req, res){

    fs.readFile('data.txt','utf-8', function(err, data){
        
        res.writeHead(200,{'Content-Type':'text/plain'});
        
        if(err) {
            res.write('could not read file...');    
        }
        else {
            res.write(data);
        }
        
        res.end();//end the connection
        
    });
    
});

httpServer.listen(9000);

console.log('server listening on 9000...');