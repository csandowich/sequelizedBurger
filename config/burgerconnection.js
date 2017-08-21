var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack + 'do better!!');
        return;
    }
    console.log('connected as id ' + connection.threadId +'read it and weep!');
});

module.exports = connection;
