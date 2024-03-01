const mysql=require("mysql2/promise");
async function connectToMysql(){
  //提供連線資訊,建立資料庫連線
   const con =await mysql.createConnection({
    user:"root",
    password:"1234",
    host:"localhost",
    database:"mydb"
   }) ;
   console.log("連線成功");
   //執行SQL指令
   //let [result]=await con.execute("insert into product(name) values('綠茶')");
   //let [result]=await con.execute("delete from product where id=6");
   let [result]=await con.execute("update product set name='美式咖啡' where id=1");
   //印出執行結果
   console.log(result);
   //關閉連線
   con.end();
}

connectToMysql();