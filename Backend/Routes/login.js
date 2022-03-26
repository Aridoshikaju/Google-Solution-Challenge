const express = require('express');
const { check } = require('express-validator')
const {db} = require('../Database/config')

const router = express.Router();

login_controller = require('../controllers/login')

router.get('/',login_controller.getUsers)

// router.post('/signup', [
//     check('name').not().isEmpty(),
//     check('email').normalizeEmail().isEmail(),
//     check('password').isLength({min: 6})
// ] ,login_controller.signup )

router.post('/signup',login_controller.signup)

router.post('/login',[
    check()
] ,login_controller.login)

module.exports = router;