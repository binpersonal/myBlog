var blogDao = require("../dao/BlogDao");
var tagsDao = require("../dao/tagsDao");
var tagBlogMappingDao = require("../dao/tagBlogMappingDao"); //映射关系要放在后面插入
var timeUtil = require("../util/timeUtil");
var respUtil = require("../util/respUtil");
var url = require("url");
// console.log(tagBlogMappingDao,1)
var path = new Map();


//详情页查询
function queryBlogById(request, response) {
    var params = url.parse(request.url, true).query;
    blogDao.queryBlogById(parseInt(params.bid),function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    })
}
path.set('/queryBlogById',queryBlogById)

//翻页
function queryBlogCount(request,response) {
    blogDao.queryBlogCount(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryBlogCount",queryBlogCount)


//查询最新博客
function queryBlogNewHot(request,response) {
    blogDao.queryBlogNewHot(5,function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    })
}
path.set('/queryBlogNewHot',queryBlogNewHot)



//查询页
function queryBlogByPage(request, response) {
    var params = url.parse(request.url,true).query;
    blogDao.queryBlogByPage(parseInt(params.page), parseInt(params.pagesize), function (result) {
        //过滤图片
        for (var i = 0 ; i < result.length ; i ++) {
            result[i].content = result[i].content.replace(/<img[\w\W]*">/, "");
            result[i].content = result[i].content.replace(/<[\w\W]{1,5}>/g, "");
            result[i].content = result[i].content.substring(0, 300);
        }
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    })
}
path.set("/queryBlogByPage",queryBlogByPage)


//插入博客
function editBlog (request,response) {
    var params = url.parse(request.url,true).query;
    var tags = params.tags.replace(/ /g,"").replace('，',",") //将中文逗号替换成英文逗号容错，将空格也替换了
    request.on("data",function (data) {
         blogDao.insertBlog(params.title,data.toString(),tags,0,timeUtil.getNow(),timeUtil.getNow(),function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        //    标签tags和blog文章向映射，所以这里不能这么早结束，否则不能返回内容，继续
        //    查询id
            var blodId = result.insertId;
            var tagList = tags.split(",");   //tag是用，隔开上传的
             // console.log(tagList,'tagList')
            for (var i = 0; i < tagList.length; i++) {
                if (tagList[i] == "") {
                    continue
                }
                //根据tag查询
                queryTag(tagList[i],blodId);
            }
        })
    })
}

path.set("/editBlog",editBlog);

//查询标签
function queryTag(tag,blogId) {
    tagsDao.queryTag(tag,function(result){
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