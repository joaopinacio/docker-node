var router = require('express').Router();
var connection = require('../../../config/db.js');

// api/students
router.get('/', function(req, res) {
  res.json({ students: [] });
});

// api/students/:id
router.get('/id/:id', function(req, res) {
  res.json({ id: req.params.id });
});

// Test Get
router.get('/test', (req, res) => {
	res.json({
		success: true,
		message: 'Hello world'
	});
});

// Get all students
router.get('/get-students', (req, res) => {
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

// Insert a student into database
router.post('/add-student', (req, res) => {
	const student = req.body;
	const query = 'INSERT INTO students values(?, ?)';

	connection.query(query, [student.rollNo, student.name], (err, results, fields) => {
		if (err) {
			console.error(err);
			res.json({
				success: false,
				message: 'Error occured'
			});
		} else {
			res.json({
				success: true,
				message: 'Successfully added student'
			});
		}
	});
});

module.exports = router;