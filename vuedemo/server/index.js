let mysql = require('mysql');
let options = {
  host:'localhost',
  port:'3306',//可选端口，默认是3306
  user:'root',
  password:'123456',
  database:'other_info'
};
//创建与数据库的链接
let con = mysql.createConnection(options);
//建立链接
con.connect((err)=>{
  //如果建立链接失败
  if (err){
    console.log(err);
  } else{
    console.log('链接成功');
  }
});
//执行数据库语句
// let strsql = 'select * from admin_user';
// con.query(strsql,(err,results,fields)=>{
//   console.log(err);
//   console.log(results);
//   console.log(fields);
// });

// let strsql2 = 'drop table admin_user';
// con.query(strsql2,(err,results)=>{
//   console.log(err);
//   console.log(results);
// });

let strsql3 = 'drop database user';
con.query(strsql3,(err,results)=>{
  console.log(err);
  console.log(results);
})
