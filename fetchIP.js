/*
    To fetch the IP Address!
*/
var dns = require('dns');
var readline = require('readline');
/*
var interface = readline.createInterface(process.stdin, process.stdout, null);

interface.question(">>IP Address for ?  ", function(answer) {
   
   interface.setPrompt(">>");
   interface.prompt();

    dns.lookup(answer,function(err, ip){
    
    if(err) {
        console.log("Oops fails to fetch IP address!");
    } else {
        console.log("IP Address for google.com --> " + ip);
    }
    
});
});
*/
process.stdin.setEncoding('utf8');

//process.stdin.resume();




process.stdin.on('data', function(input){
    
    var input = input.toString('utf-8');
    
    dns.lookup(input,function(err, ip){
    
    if(err) {
        console.log("Oops fails to fetch IP address!");
    } else {
        console.log("IP Address for "+ input + " --> " + ip);
    }
    });
    
});
