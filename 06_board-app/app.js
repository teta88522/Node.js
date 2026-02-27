// express 인스턴스.
const express = require("express");
require('dotenv').config()
const session = require('express-session');

// 서버 인스턴스
const app = express();

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // true=> https, false=> http
      maxAge: 10 * 60 * 1000,
    },
    // store: new fileStore(), // 추가.
  }),
);
app.use(express.static('public'))

// json body-parser
app.use(express.json()); //바디영역 처리 

// 라우팅
app.use('/api/board', require('./routes/boardRoutes'))

app.use('/api/auth', require('./routes/authRoutes'))




//서버 시작
app.listen(3000, () => {
  console.log('localhost:3000 => server start')
  }
)
