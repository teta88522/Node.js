// crypto.js
const crypto = require('crypto')
require('dotenv').config();

// 평문을 암호화하는 함수.
function createPassword(plainTxt){
  const salt = process.env.MYSQL_SALT;
  const passwd = crypto.pbkdf2Sync(
        plainTxt, // 평문.
        salt, // salt값.
        100000, // 반복횟수.
        64, // 암호와문의 크기.
        "sha512");
        // console.log(passwd.toString("base64"));
        return passwd.toString("base64")
}

// 입력한 비밀번호 vs 데이터베이스에 저장된 값과 비교.
function checkPassword(plainTxt, hashPasswd){
  const hashPasswd1 = createPassword(plainTxt);
  return hashPasswd1 == hashPasswd;
}

// console.log(createPassword('test1234'))


// const dbPass = `QUpzZ88E9rs1a5UYxfczOMnLXRL7oyujCZfi3HfkIAN24Yb6aPPEHiU16H0FOxanzct+OSfnCoowVCn7Xfgc+Q==`
// console.log(dbPass.length)
// console.log(checkPassword('test1234',dbPass))

module.exports = {createPassword,checkPassword}
