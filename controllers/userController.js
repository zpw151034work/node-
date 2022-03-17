
var dbConfig = require("../util/dbconfig");
getUser =(req,res)=>{
 let {name} = req.query;
 var sql =  'select * from user where name=?';
 var sqlArr = [name];
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