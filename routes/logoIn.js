var express = require('express');
var router = express.Router();
var  logoIn = require('../controllers/logoinController')
//发送验证码
router.post('/sendCode', logoIn.sendCode);
//验证码登录接口
router.post('/logo', logoIn.codePhoneLogoIn);

module.exports = router;
  