var mysql = require('mysql');

function DB() {
	var connection = mysql.createConnection({
	    user: 'root',
	    password: 'root',
	    host: 'localhost',
	    port: 3306,
	    database: 'rbkadmission'
	});
	return connection;
}

module.exports = DB();
