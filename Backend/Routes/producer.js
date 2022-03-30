const express = require('express');

const router = express.Router();

producers_controller = require('../controllers/producer_ctrl')

router.post('', producers_controller.producer_details)

module.exports = router;