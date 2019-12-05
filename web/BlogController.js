var blogDao = require("../dao/BlogDao");
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao"); //映射关系要放在后面插入
var timeUtil = require("../util/timeUtil");
var respUtil = require("../util/respUtil");
var url = require("url");
var path = new Map();

//插入博客
function editBlog (request,response) {
    var params = url.parse(request.url,true).query;
    var tags = params.tags.replace(/ /g,"").replace('，',",") //将中文逗号替换成英文逗号容错，将空格也替换了
    request.on("data",function () {
         blogDao.insertBlog(params.title,data.toString(),tags,0,timeUtil.getNow(),timeUtil.getNow(),function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        //    标签tags和blog文章向映射，所以这里不能这么早结束，否则不能返回内容，继续
        //    查询id
            var blodId = result.insertId;
            var tagList = tags.split(",");   //tag是用，隔开上传的
            for (var i = 0; i < tagList; i++) {
                if (tagList[i] == "") {
                    continue
                }
                //根据tag查询
                queryTag(tagList[i],blodId);
            }
        })
    })
}

path.set("./editBlog",editBlog);

//查询标签
function queryTag(tag,blogId) {
    tagsDao.queryTag(tag,function(){
        if (result == null ||result.length == 0 ) {  //没有tag，就insert tag
            insertTag(tag, blogId);  //层层映射
        } else { //有标签的时候
            //插入标签和博客映射
            tagBlogMappingDao.insertTagBlogMapping(result[0].id, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {

            });
        }
    });
}

//插入标签
function insertTag(tag,blogId) {
    tagsDao.insertTag(tag,timeUtil.getNow(),timeUtil.getNow(),function (res) {
        insertTagBlogMapping(res.insertId,blogId) //层层映射
    })
}

//tag和blog映射所以也要插入一个表
function insertTagBlogMapping (tagId,blogId) {
    tagBlogMappingDao.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function (res) {

    })
}



module.exports.path = path;