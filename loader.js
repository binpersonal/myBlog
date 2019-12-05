var fs = require('fs');
var globalConfig = require('./config');
var pathMap = new Map();
var controlarSet = [];


    var files = fs.readdirSync(globalConfig["web_path"]);
    // console.log(files,1)
    for (var i in files) {
        var temp = require("./" + globalConfig["web_path"] + "/" + files[i]);
        if (temp.path) {
            for (var [key, value] of temp.path) {
                if (pathMap.get(key) == null) {
                    pathMap.set(key,value);
                } else {
                    throw new Error('url异常');
                }
            }
            controlarSet.push(temp);
        }
    }

module.exports = pathMap;