var http = require('http')
var rf = require("fs")
var format = require('string-format')

const redis = require('redis');
const redisClient = redis.createClient({
    host: '127.0.0.1', // 默认 host
    port: '6379' // 默认端口
});
redisClient.on("error", function (err) {
    console.log("Error " + err);
});

const INLINE = "inline";
const START = "start";
const WAITING = "waiting";
const WORKING = "working";
const SUCCESS = "success";
const WENAN = {
    "inline": "正在排队",
    "start": "开始抢",
    "waiting": "等待有疫苗",
    "working": "正在抢",
    "success": "抢成功"
}

var RedisApi = {
    "addJob": (idCard, city, name) => {
        redisClient.set(`JOB_${idCard}_${city}_${name}`, INLINE);
    },
    "queryJob": async (idCard, city, name) => {
        var result = null;
        await redisClient.get(`JOB_${idCard}_${city}_${name}`, (err, value) => {
            if (err) {
                console.log(err);
                return null;
            }
            result = value;
        });
        return result;
    }
}

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
    var url = req.url.slice(5);
    if (url.startsWith("submitTask")) {
        var params = getQueryParams(req.url);
        RedisApi.addJob(params["idCard"], params["city"], params["name"]);
        res.writeHead(200, {
            'content-type': 'text/html;charset=utf8'
        });
        res.write("成功提交任务，请耐心等待结果");
        res.end();
        return;
    }
    if (url.startsWith("queryJob")) {
        var params = getQueryParams(req.url);
        aa = RedisApi.queryJob(params["idCard"], params["city"], params["name"]);
        redisClient.get(`JOB_${params["idCard"]}_${params["city"]}_${params["name"]}`, (err, value) => {
            if (err) {
                console.log(err);
                return null;
            }
            if (value) {
                res.write(WENAN[value]);
            } else {
                res.write("没有查到此记录");
            }
            res.end();
        });
        return;
    }
    res.write("404");
    res.end();
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
