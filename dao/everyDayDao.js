var dbutil = require ("./dbutil");

function insertEveryDay(content, ctime, success) {
    var insertSql = "insert into every_day( `content`,`ctime` ) values(?,?)";
    var parmas = [content,ctime];
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

function queryEveryDay(success) {
    var querySql = "select * from every_day order by id desc limit 1;";  // limit 1只取一个
    var parmas = [];
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

module.exports.insertEveryDay = insertEveryDay;
module.exports.queryEveryDay = queryEveryDay;