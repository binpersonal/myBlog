var path = new Map();
var everydayDao = require ("../dao/everyDayDao");
var timeUtil = require("../util/timeUtil");
var respUtil = require("../util/respUtil");
// console.log(everydayDao)
function editEveryDay(request, response) {
    request.on("data", function(data) {
        // console.log(data.toString())
        everydayDao.insertEveryDay(data.toString().trim(), timeUtil.getNow(), function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        });
        });
}

function queryEveryDay(request, response) {
    everydayDao.queryEveryDay(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "添加成功", result));
        response.end();
    })
}

path.set('/editEveryDay', editEveryDay);
path.set('/queryEveryDay', queryEveryDay);

module.exports.path = path;