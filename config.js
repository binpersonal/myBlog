var fs = require('fs');
var globalConfig = {};
var conf = fs.readFileSync( "./serve.conf");
var configArr = conf.toString().split("\n");      //拆分
// console.log(configArr)
for (var i in configArr) {
    var tempConfig = configArr[i];
    //global是一个对象，给他一个键值对安灯好拆分，左边split(“=”)[0]为键哦吼变为值
    globalConfig[tempConfig.split("=")[0]] = tempConfig.split("=")[1].trim()
}
module.exports = globalConfig;