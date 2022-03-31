const express = require('express');

const router = express.Router();

consumer_controller = require('../controllers/consumer_ctrl')

router.post('', consumer_controller.customer_details)

module.exports = router;