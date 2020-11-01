const mysql = require('mysql');

// Mysql credentials
const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST || 'mysql', // Container's name
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'mysql',
    port: 3306
});

connection.connect((err) => {
	if (err) {
		console.error('error connecting mysql: ', err);
	} else {
		console.log('mysql connection successful');
	}
});

module.exports = connection;