const mysql = require('mysql')
require('dotenv').config();
const sql = require('./sql')

// connection pool
const pool = mysql.createPool({
  connectionLimit: process.env.MYSQL_LIMIT,  // 뭐 10초정도 기다리라
  host :  process.env.MYSQL_HOST, //경로
  port :  process.env.MYSQL_PORT,  // 상세 경로
  user : process.env.MYSQL_USERNAME,  // 사용자 이름
  password : process.env.MYSQL_PASSWORD, // 비번
  database : process.env.MYSQL_DB // 데이타베이스 이름
});

// query 함수.
const query = async (alias, values) => {
  return new Promise((resolve, reject) => {  //resolve 실행값 ,reject 오류값
    pool.query(sql[alias]   // 1) sql 구문.
              ,values       // 2) query parameter=> [값1,값2....]
              ,(error, results) => {
                if(error) {
                  // console.log(error);
                  reject({error});
                }
                else {
                  resolve(results);
                }

              } // 3)callback 함수.
    );
  });
}

async function exe() {
  const result = await query(
    'customerInsert', 
    [
    '재스엉',
    'jaesung123@email.com',
    '010-5877-4485'
  ]);
  console.log(result)
}



// exe();

module.exports = { query };