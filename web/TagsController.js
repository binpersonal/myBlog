var blogDao = require("../dao/BlogDao");
var tagsDao = require("../dao/tagsDao");
var tagBlogMappingDao = require("../dao/tagBlogMappingDao"); //映射关系要放在后面插入
var timeUtil = require("../util/timeUtil");
var respUtil = require("../util/respUtil");
var url = require("url");
var path = new Map();



//查询随机标签
function queryRandomTags(request,response) {
    tagsDao.queryAllTag(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    })
}
path.set('/queryRandomTags',queryRandomTags);



module.exports.path = path;