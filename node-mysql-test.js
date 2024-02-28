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
   //關閉連線
   con.end();
}

connectToMysql();