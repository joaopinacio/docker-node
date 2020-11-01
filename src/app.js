const app = require('express')();
const mysql = require('mysql');

// environment variables
const PORT = process.env.PORT || 9090;
const HOST = process.env.HOST || '0.0.0.0';

// mysql credentials
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
		app.listen(PORT, HOST, (err) => {
			if (err) {
				console.error('Error starting  server', err);
			} else {
				console.log('server listening at port ' + PORT + " and host " + HOST);
			}
		});
	}
});

// Test Get
app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Hello world'
	});
});

// // Insert a student into database
// app.post('/add-student', (req, res) => {
// 	const student = req.body;
// 	const query = 'INSERT INTO students values(?, ?)';

// 	connection.query(query, [student.rollNo, student.name], (err, results, fields) => {
// 		if (err) {
// 			console.error(err);
// 			res.json({
// 				success: false,
// 				message: 'Error occured'
// 			});
// 		} else {
// 			res.json({
// 				success: true,
// 				message: 'Successfully added student'
// 			});
// 		}
// 	});
// });

// Get all students
app.post('/get-students', (req, res) => {
	const query = 'SELECT * FROM students';
    connection.query(query, (err, results, fields) => {
    	if (err) {
    		console.error(err);
    		res.json({
    			success: false,
    			message: 'Error occured'
    		});
    	} else {
    		res.json({
    			success: true,
    			result: results
    		});
    	}
    });
});