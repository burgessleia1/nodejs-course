const express = require('express');
const router = express.Router();

// Example product route
router.get('/', (req, res) => {
    res.send('Products route works!');
});

module.exports = router;
