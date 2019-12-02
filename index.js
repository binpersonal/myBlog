var express = require('express');
var app = new express();
app.use(express.static("./page"));
app.listen(80,function () {
    console.log("服务器已启动")
});