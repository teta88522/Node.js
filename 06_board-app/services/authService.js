// 업무.
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const memberModel = require('../models/memberModel');


// 사용자 생성
async function signup(id,name,pass,role) {
  const hashed = await bcrypt.hash(pass, 10); //
  console.log(hashed)
  return memberModel.memberInsert(id,name,hashed,role)
}


async function login(id,pass){
  const [rows] = await memberModel.findMemberById(id);
  // 조회된 결과 없으면
  if(rows.length == 0){
    return null
  }
  // 평문:password 비교 > rows[0].password
  const user = rows[0];
  const match = await bcrypt.compare(pass, user.password);
  console.log(match)
  console.log(user.password)

  if (!match) {
    return null;
  }
  // 토큰 발행 -> 암호화 -> 반환
  const token = jwt.sign({
    member_id : user.member_id,
    login_id : user.login_id,
    name : user.name
  },
  'secret-token',
  {expiresIn: "1h"}
);
  console.log(token)
  // 정상.
  return token;  // token
}


module.exports = { signup,login }