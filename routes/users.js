var express = require('express');
var router = express.Router();
var user = require('../controllers/userController')
router.get('/', user.getUser);
module.exports = router;
