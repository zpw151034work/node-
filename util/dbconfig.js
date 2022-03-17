
const mysql = require('mysql');
module.exports = {
    //输入数据库配置
    config:{
        host:'localhost',
        port:'3306',
        user:'root',
        password:'zpw151034',
        database:"user",

    },
    //链接数据库，使用mysql
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            console.log(err);
            console.log("123456666");
            if(err){
                console.log('链接失败');
                return
            }
            //事件驱动回调
            conn.query(sql,sqlArr,callBack);
            //释放链接
            conn.release();

        })
         
    }

}
