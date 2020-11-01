var router = require('express').Router();

// split up route handling
router.use('/students', require('./students/students.js'));
// etc.

module.exports = router;