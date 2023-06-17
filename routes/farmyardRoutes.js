const express = require('express');
const router = express.Router();
const farmyardController = require('../controllers/farmyardController');

router.post('/', farmyardController.createFarmyard);

module.exports = router;
