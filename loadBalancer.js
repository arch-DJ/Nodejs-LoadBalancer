var http = require('http'),
httpProxy = require('http-proxy');
var servers =  ['http://127.0.0.1:3000','http://127.0.0.1:1234','http://127.0.0.1:3000'];

var proxy = httpProxy.createProxyServer();
var count = 0;
var conn = http.createServer(function(req,res){
    loadBalanceProxy(req,res);
}).listen(8000);

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
