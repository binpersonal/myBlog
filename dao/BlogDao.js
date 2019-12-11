var dbutil = require ("./dbutil");

//插入数据库
function insertBlog(title, content, tags, view, ctime, utime, success) {
    var insertSql = "insert into blog (`title`, `content`, `tags`, `view`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?)";
    var params = [title, content, tags, view, ctime, ctime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}





//专用翻页总数
function queryBlogCount (success) {
    var querySql = "select count(1) as count from blog;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql , params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}



//查询博客，翻页功能
function queryBlogByPage (page, pageSize, success) {
    var insertSql = "select * from blog order by id desc limit ?, ?;";
    var params = [page * pageSize, pageSize];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


//详情页查询
function queryBlogById (id, success) {
    var querySql = "select * from blog where id = ?;";
    var params = [id];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


//查询最新博客
function queryBlogNewHot (size, success) {
    var querySql = "select * from blog order by view desc limit ?;";
    var params = [size];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


module.exports = {
    'insertBlog':insertBlog,
    'queryBlogByPage':queryBlogByPage,
    'queryBlogCount': queryBlogCount,
    'queryBlogById':queryBlogById,
    'queryBlogNewHot':queryBlogNewHot
}