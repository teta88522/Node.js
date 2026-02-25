// app.js
const express = require('express');
const path = require('path')

// .env 환경변수
require("dotenv").config()



const mysql = require("./index");
const encrypto = require("./crypto");
const nodemailer = require("./nodemailer")
const {upload} = require("./multer")
const {excel_run} = require("./excel")

// express 인스턴스
const app = express();

//body-parser.
app.use(express.json())

app.use(express.static("public"));

// 라우팅.s
// 1. 전체목록 조회, 리소스+요청방식 => CRUD(REST방식)
app.get('/api/customer',async (req, res) => {
  const result = await mysql.query('customerList')

  // 결과응답. json 문자열로 반환,
  res.json(result)
})

// 2. 등록
app.post('/api/customer', async(req,res) =>{
  const {name,email,phone,passwd} = req.body;
  // 암호화 단계.
  const hashPasswd = encrypto.createPassword(passwd);
  const result = await mysql.query('customerInsert', 
    { name, email : email, phone :phone, passwd : hashPasswd})
  console.log(result)
  res.json(result); 
})

// 3. 수정
app.put('/api/customer', async (req,res) =>{
  const {name,email,phone,id} = req.body
  const result = await mysql.query('customerUpdate', [{name,email,phone},id])
  res.json(result)

})

// 4. 삭제
app.delete('/api/customer/:id', async (req,res) =>{
  const {id} = req.params
  const result = await mysql.query('customerDelete', [id])
  res.json(result)

})

//5  조회(로그인 : id(email), pw(평문 vs 암호화))
app.post('/api/login', async (req,res) => {
  // 조회(email 기준으로 조회.)
  const {email,passwd} = req.body
  const [row] = await mysql.query('customerSelect', [email])
  const hash = row.passwd
  // console.log(row)
  // checkPassword()
  const checkpass = encrypto.checkPassword(passwd,hash)
  res.json(checkpass);  // 로그인 성공 여부 
}) 

//6. 메일 발송
app.post('/api/mail', upload.single('myfile'), async (req,res) => {
  const {from, to, subject, content} = req.body;
  console.log(req.body);

  // multi 라인으로 변경
  const html = content.split("\n")
              .map((elem) => `<p>${elem}</p>`)
              .join("");

  let attachments;
  // 메일정보. 파일첨부 여부에 따라 처리
  if(req.file == undefined){
    attachments = null
  }
  else{
  attachments = [{filename : req.file.filename,
    path : req.file.path}]  //path.join(__dirname, req.file.destination, req.file.filename)
    
  }
  
  const postdata = {
    from, 
    to, 
    subject, 
    html,
    attachments }

  const result = await nodemailer.send(postdata)
  // res.json(result); 이건 이벤트 처리 방식
  // res.send(result);
  if(result.messageId){
    res.json({retCode : "OK"});
  }
  else {
    res.json({retCode : 'NG'})
  }
})

//엑셀파일 첨부 후 db.
app.post("/api/excel_upload", upload.single('excelFile'), async(req,res) =>{
  console.log(req)
  excel_run(req.file.path);
  res.send("upload OK")
}
)





//서버 열기
app.listen(3000,() =>{
  console.log('server is running ....')
})
