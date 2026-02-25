const express = require('express')
require('dotenv').config()

const mysql = require('./index');
const xlsx = require('xlsx')

const app = express();

app.use(express.json({
    limit: '50mb'
}));

app.listen('3000',() => {
    console.log('숙제서버 오픈~')
})

//  고객 정보 엑셀 파일 다운로드
app.get('/download/customers', async (req,res) => {
    const workbook = xlsx.utils.book_new();  // 가상의 엑셀 파일 생성
    const customers = await mysql.query('customerList'); 
    const first_Sheet = xlsx.utils.json_to_sheet( customers, {header : [
        "id",
        "name",
        "email",
        "phone",
        "address"]});
}
)

