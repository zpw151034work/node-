
var dbConfig = require("../util/dbconfig");
function rand(min,max){
  return Math.floor(Math.random()*(max-min))+min
}
sendCode =(req,res)=>{
 let phone = req.query.phone;
 let code = rand(1000,9999);
 res.send({
  'code':200,
  "msg":'发送成功'

 })
 console.log(code);
}
//手机code验证方法

//手机号登录接口
codePhoneLogoIn = (req,res)=>{
 let  phone = req.query.phone;
 if(phone=="13691202460"){
   res.send(
     {
       'code':200,
       'msg':'登录成功'
     }
   )
  
 }

}
module.exports={
  sendCode,
  codePhoneLogoIn
}