const express = require('express') ; // 모듈 가져오기 늘 먹던맛
const fs = require('fs')
const session = require('express-session')
const fileStore = require('session-file-store')(session)

const app = express(); // 실제 인스턴스(객체) 생성 / 쓰기 편하게 만드는거
const customerRoute = require("./routes/customer");
const compression = require('compression');
// const productRoute = require("./routes/product")
const cors = require('cors')

// 정적파일 폴더(html,css,js)
app.use(express.static("public"));

// body parser 셋업
app.use(express.urlencoded()) // x-www-form-urlencoded 로 넘어오면 해석
app.use(express.json())
app.use("/customer/download", compression())

// session을 관리
app.use(
  session({
    secret: 'secret key',
    resave : false,
    saveUninitialized : true,
    cookie:{
      httpOnly: true,
      secure : true,
      maxAge : 600000,
    },
    // store: new fileStore(), // 추가
  }),
)



//cors 셋업
app.use(cors())



// 라우팅. 요청방식+URL(end point) => 실행할 함수 
app.get('/',(req, res) => {
  // fs.readFile 메소드 / fs.readFileSync
  const data = fs.readFileSync("index.html","utf-8");
  res.status(200).send(data)
})


// 외부 라우팅정보.
app.use("/customer", customerRoute);
app.use("/product", require("./routes/product"));

app.get('/data', (req,res) =>{
  res.json({id:'1001', data: 'sample' })
}
  )

// session
app.get('/login', (req,res) => {
  req.session.user = {id: "user00", name: "홍길동"};
  console.log(req.session.user)
  res.send("session에 저장")
});

app.get("/logout", (req,res) => {
  req.session.destroy
  res.send("로그아웃")
});

app.get("/my_info", (req,res) => {
  console.log(req.session.user)
  if(!req.session.user){
    res.json({retCode : "NG" , retMsg:"No user info"});
    return;
  }
  res.json(req.session.user);
});


// express 에서 에러처리.
app.use((err,req,res,next) => {
  console.log(err);
  res.status(500).json({statusCode:res.statusCode, errMsg: err.message});
});


// 서버실행.
app.listen(3000,() => {
  console.log('server start / localhost:3000')
});