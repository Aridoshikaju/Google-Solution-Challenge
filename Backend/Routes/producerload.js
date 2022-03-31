const express = require('express');

const router = express.Router();

producerload_ctrl = require('../controllers/producerload_ctrl')

router.post('/producerload', producerload_ctrl.producer_load)

module.exports = router;