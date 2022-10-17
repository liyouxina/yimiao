var http = require('http')
var rf = require("fs")
var format = require('string-format')

var handleApi = (req, res) => {
    var url = req.url.trimStart("/api");
    switch (url) {
        case "submitTask": {
            break;
        }
        case "queryProcess": {
            break;
        }
    }
}

var server = http.createServer();
server.listen(3000, () => {
    console.log("server start")
})

server.on('request', (req, res) => {
    console.log(`url is ${req.url}`);

    if (req.url.startsWith("/api")) {

    } else {
        res.write(format(rf.readFileSync("./index.html","utf-8"), req.url));
        res.end();
    }
})
