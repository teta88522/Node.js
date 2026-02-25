// nodemailer.js
const nodemailer = require("nodemailer");

// .env 환경변수
require("dotenv").config()

const gmailconfig = {}
const daumconfig = {
  host:"smtp.daum.net", //호스트 주소
  port: 465,
  secure: true,
  auth:{
    user:process.env.MYSQL_ID,
    pass:process.env.MYSQL_PW
  }
}

// nodemailer 모듈의 createTransport 함수 => transport 객체.
const send = async (data) => {
  return new Promise((resolve,reject) => {
    const transport = nodemailer.createTransport(daumconfig);
    //메일 발송
    transport.sendMail(data, (err,result) =>{
    if(err){
      console.log(err)
      reject(err)
    }
    else{
      console.log(data)
      resolve(result)
    }
    }
  
    ) 
  })
}

// send({from:'swotjd9805@daum.net',
//   to:'swotjd9805@naver.com',
//   subject : '파일첨부테스트',
//   html : '<p>파일 첨부 연습</p>',
//   attachments : [
//     {
//       filename : '딸기.jpg',
//       path : __dirname + '/uploads/'+"딸기.jpg"
//     }
//   ]
  
// }
// )

// console.log("main send.....");
module.exports = { send }