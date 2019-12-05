var express = require('express');
var globalConfig = require('./config');
var loader = require("./loader");
console.log(loader.get('/editEveryDay'));
var app = new express();
app.use(express.static("./page/"));


app.post('/editEveryDay',loader.get('/editEveryDay'));  //每日一句
app.get('/queryEveryDay',loader.get('/queryEveryDay'));

app.post('/editBlog',loader.get('/editBlog'));  //博客文章
app.get('/queryBlog',loader.get('/queryBlog'));

app.listen(globalConfig['port'], function() {
    console.log("服务器已启动")
});