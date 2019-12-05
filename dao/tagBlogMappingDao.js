var dbutil = require ("./dbutil");

function insertTagBlogMapping(tagId, blogId, ctime, utime, success) {
    var insertSql = "insert into tag_blog_mapping (`tag_id`, `blog_id`, `ctime`, `utime`) values (?, ?, ?, ?)";
    var params = [tagId, blogId, ctime, utime];
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

function queryTag(tag,success) {
    var querySql = "select * from tags where tag=?;";  // limit 1只取一个
    var parmas = [tag];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql,parmas,function (err, result) {
        if (err == null) {
            success(result)
        } else {
            console.log(err)
        }
    })
    connection.end();
}

module.exports.insertTagBlogMapping = insertTagBlogMapping;
// module.exports.queryTag = queryTag  ;