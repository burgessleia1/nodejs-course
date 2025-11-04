const express = require('express');
const router = express.Router();
const { helloWorld, tooeleTech } = require('../controllers');

router.get('/', helloWorld);
router.get('/ttech', tooeleTech);

module.exports = router;
