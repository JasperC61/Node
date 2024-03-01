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

   //在SQL指令中帶入外部變數
  //  let newName="美式";
  //  let productId="1";
  //  let [result]=await con.execute("update product set name=? where id=?" , [newName, productId]);

  let[results]=await con.execute("select * from product");
   //印出執行結果
   //console.log(results);
   //關閉連線
   //逐一取得每一筆資料細項
   results.forEach((product)=>{
    console.log(product.name);
   });
   con.end();
}

connectToMysql();