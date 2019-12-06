var dbutil = require ("./dbutil");

function insertTag(tag, ctime, utime, success) {
    var insertSql = "insert into tags( `tag`,`ctime`,`utime` ) values(?,?,?)";
    var parmas = [tag,ctime,utime];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql,parmas,function (err, result) {
        if (err == null) {
            success(result)
        } else {
            console.log(err)
        }
    })
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

module.exports.insertTag = insertTag;
module.exports.queryTag = queryTag;