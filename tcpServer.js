var net = require('net');

var server = net.createServer(function(con){
    
    console.log('connected');
    
    //On data recieved!
    con.on('data', function(data){
        console.log(data + ' from ' + con.remoteAddress + 'port no.' + con.remotePort);
        con.write(data);
    });
    
    
    //On connection close
    con.on('close', function(){
        console.log('connection closed');
    })
    
});

server.listen(9500);
console.log('listening on 9500...');