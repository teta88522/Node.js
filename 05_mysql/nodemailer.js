// nodemailer.js
const nodemailer = require("nodemailer");

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

module.exports = { send }