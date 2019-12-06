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





app.listen(globalConfig['port'], function() {
    console.log("服务器已启动")
});
