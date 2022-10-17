var http = require('http')
var rf = require("fs")
var format = require('string-format')
var RedisApi = require('./lib/redis')

var getQueryParams = (url) => {
    if (url.split("?").length == 0) {
        return [];
    }
    var keyValues = url.split("?")[1].split("&");
    var result = {};
    for (var i = 0; i < keyValues.length; i++) {
        result[keyValues[i].split("=")[0]] = keyValues[i].split("=")[1];
    }
    return result;
}

var handleApi = (req, res) => {
    var url = req.url.trimStart("/api/");
    if (url.startsWith("submitTask")) {
        var params = getQueryParams(req.url);
        RedisApi.addJob(params["idCard"], params["city"], params["name"]);
        res.write("成功提交任务，请耐心等待结果");
        res.end();
        return;
    }
    if (url.startsWith("queryProcess")) {
        var params = getQueryParams(req.url);
        res.write(RedisApi.queryJob(params["idCard"], params["city"], params["name"]));
        res.end();
        return;
    }
}

var handle = (req, res) => {
    if (req.url.startsWith("/api/")) {
        handleApi(req, res);
        return;
    }
    switch (req.url) {
        case "/": {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf8'
            });
            res.write(format(rf.readFileSync("./index.html","utf-8"), req.url));
            break;
        }
        case "": {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf8'
            });
            res.write(format(rf.readFileSync("./index.html","utf-8"), req.url));
            break;
        }
        default: {
            res.write(rf.readFileSync(`.${req.url}`,"utf-8"));
            break;
        }
    }
    res.end();
}

var server = http.createServer();
server.listen(3000, () => {
    console.log("server start")
})

server.on('request', (req, res) => {
    console.log(`url is ${req.url}`);

    try {
        handle(req, res);
    } catch (error) {
        console.log(error);
        res.write("internal server error");
        res.end();
    }
})
