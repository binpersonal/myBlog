var express = require('express');
var globalConfig = require('./config');
var loader = require("./loader");
var app = new express();
app.use(express.static("./page/"));
// console.log(loader.get('/editBlog'),2)

app.post('/editEveryDay',loader.get('/editEveryDay'));  //每日一句
app.get('/queryEveryDay',loader.get('/queryEveryDay'));

app.post('/editBlog',loader.get('/editBlog'));  //博客文章
app.get('/queryBlogByPage',loader.get('/queryBlogByPage'));

app.get('/queryBlogCount',loader.get('/queryBlogCount')); //总数翻页

app.get('/queryBlogById',loader.get('/queryBlogById'))   //详情页查询

app.get('/addComment',loader.get('/addComment'))   //添加评论

app.get('/queryRandomCode',loader.get('/queryRandomCode'))     //生成验证码接口

app.get('/queryCommentsByBlogId',loader.get('/queryCommentsByBlogId'))     //查询评论

app.get('/queryBlogNewHot',loader.get('/queryBlogNewHot'))     //查询最新博客

app.get('/queryRandomTags',loader.get('/queryRandomTags'))     //查询标签云

app.get('/queryNewComments',loader.get('/queryNewComments'))     //查询最新评论






app.listen(globalConfig['port'], function() {
    console.log("服务器已启动")
});
