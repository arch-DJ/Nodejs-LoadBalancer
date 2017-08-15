const http = require('http'),
httpProxy = require('http-proxy');

//create the list of all the target servers
var servers =  ['http://127.0.0.1:3000','http://127.0.0.1:1234','http://127.0.0.1:3000'];

//create the server proxy
var proxy = httpProxy.createProxyServer();

//start the server
var conn = http.createServer(function(req,res){
    loadBalanceProxy(req,res);
}).listen(8000);

//handle the error
conn.on('error',function(error){
	console.log("there is an error");
})

var currentServer = 1;

function loadBalanceProxy(req, res){
    var cur = currentServer%servers.length;
    currentServer++;
    var target = servers[cur];
    proxy.web(req, res, {
        target: target
    });
}
