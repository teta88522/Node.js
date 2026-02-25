// excel.js
// 엑셀파일 읽기.readFile
// 시트중에 첫번째 [0] -> tlxmdlfma dlfrrl
// -> json,csv 변환 메소드

const xlsx = require("xlsx")
const mysql = require('./index')

async function excel_run(filepath){
const workbook = xlsx.readFile(filepath);
const sheetName = workbook.SheetNames[0];
const firstSheet = workbook.Sheets[sheetName];
// console.log(firstSheet,"여기까지")
const jsonData = xlsx.utils.sheet_to_json(firstSheet);
// console.log(jsonData)

for(let prof of jsonData){
  // console.log(prof['이름']);
  const param = {
    name:prof['이름'],
    email:prof['이메일'],
    phone : prof['연락처'],
    address: prof['주소'],
    passwd : prof['비밀번호']
    
  }
  try{
  const result = await mysql.query('customerInsert', [param]);
  // console.log(result)
  }
  catch(err){
    // console.log(err)
  }
}
}

module.exports = {excel_run}