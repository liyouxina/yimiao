const redis = require('redis');
const redisClient = redis.createClient({
    host: '127.0.0.1', // 默认 host
    port: '6379' // 默认端口
});

const INLINE = "inline";
const START = "start";
const WAITING = "waiting";
const WORKING = "working";
const SUCCESS = "success";


var RedisApi = {
    "addJob": (idCard, city, name) => {
        redisClient.set(`JOB_${idCard}_${city}_${name}`, INLINE);
    },
    "queryJob": (idCard, city, name) => {
        return redisClient.get(`JOB_${idCard}_${city}_${name}`);
    }
}