
var dbConfig = require("../util/dbconfig");
getUser =(req,res)=>{
 var sql =  'select * from user';
 var sqlArr = [];
 var callBack = (err,conn)=>{
   if(err){
     console.log('链接错误');
   }else{
     res.send({
       list:conn
     })
   }
 }
 dbConfig.sqlConnect(sql,sqlArr,callBack);

}

module.exports={
    getUser 
}