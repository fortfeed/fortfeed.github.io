var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    if(req.url === "/form") {
        res.writeHead(200, {"Contnet-Type" : "text/html"});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    }
}).listen(3000);