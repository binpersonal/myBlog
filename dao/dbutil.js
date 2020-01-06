var mysql = require('mysql');

function createConnection () {
    var connection = mysql.createConnection({
        host:'106.53.2.231',
        port:'3306',
        user:'root',
        password:'980216',
        database:'my_blog'
    });
    return connection;
}

module.exports.createConnection = createConnection