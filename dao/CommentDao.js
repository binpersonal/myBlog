var dbutil = require ("./dbutil");


//查询全部评论
function queryCommentCountByBlogId(blogId,success) {
    var querySql = "select count(1) as count from comments where blog_id = ?;";
    var params = [blogId];
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




//查询最新评论
function queryNewComments(size, success) {
    var querySql = "select * from comments order by id desc limit ?;";
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



//查询评论
function queryCommentsByBlogId(blogId, success) {
    var querySql = "select * from comments where blog_id = ?;";
    var params = [blogId];
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


//添加评论
function insertComment(blogId, parent,parentName, userName, email, comments, ctime, utime, success) {
    var insertSql = "insert into comments (`blog_id`, `parent`,`parentName`,`userName`, `email`, `comments`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?, ?,?)";
    var params = [blogId, parent,parentName, userName, email, comments, ctime, utime];

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


module.exports = {
    'insertComment':insertComment,
    'queryCommentsByBlogId':queryCommentsByBlogId,
    'queryNewComments':queryNewComments,
    'queryCommentCountByBlogId':queryCommentCountByBlogId
}