var router = require('express').Router();

(async () => {
    const database = require('../../config/db.js');
    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

// split up route handling
router.use('/products', require('./products/products.js'));
// etc.

module.exports = router;