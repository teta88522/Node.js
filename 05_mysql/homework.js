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

        first_Sheet["!cols"] = [
            {wpx : 50},
            {wpx : 200},
            {wpx : 200},
            {wpx : 140},
            {wpx : 200},
        ];
        
        xlsx.utils.book_append_sheet(workbook, first_Sheet,"Customers");

        res.setHeader('Content-disposition', 'attachment; filename = Customer.xlsx'); // 다운
        res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); //엑셀파일 mimetype설정
        res.end( Buffer.from(xlsx.write(workbook,{type:'base64'}),'base64'))
}
);

// 첫 번째 시트에 작성한 데이터를 넣는다.
