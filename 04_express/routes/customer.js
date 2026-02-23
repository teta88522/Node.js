// customers 와 관련된 자료
const router = require('express').Router();
const path = require('path')// path 모듈 가져오기

// http요청방식 + end point => CRUD 처리(REST 방식)
router.get('/search',
  (req,res,next) => {
  console.log('middleware요청');
  next();
  },
  (req,res) => {
    // res.redirect("/");
    // res.download(path.join(__dirname,'cyber.jpg'));
    console.log("응답처리중")
    res.json({
      retCode : 'Success',
      retMsg: "Server Status 200"
    })
  }
);

router.get('/error', (req,res) =>{
  throw new Error('에러발생');
})

router.post('/customer', (req,res) =>{
  res.send("post방식 요청.");
});

// Get요청(parameter로 처리.)     => req.params 처리가능
// post요청(body에 데이터가 포함되서 옴(req.body) => 해석 하기 위한 기능 body-parser )
router.post('/login',(req,res) => {
  console.log(req.body)
  res.send("login page")
})

// compression() 미들웨어 http://localhsot:3000/customer/download
router.get('/download',(req,res) =>{
  // res.send('compression() 모듈적용.');
  res.download(path.join(__dirname,'..','cyber.jpg'))
})


module.exports = router; // 익스포트.
