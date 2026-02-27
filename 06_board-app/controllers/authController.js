// 컨트롤 (라우터 핸들러)
const memberService = require("../services/authService")

const signup = async (req,res) => {
  const {login_id,name,password,role} = req.body 
    const [rows] = await memberService.signup(login_id,name,password,role)
    res.json({retCode :'OK'})
    console.log(rows)

  
}

const login = async (req,res) => {
  const {id,pass} = req.body 
  const token = await memberService.login(id,pass) ; 

  if (!token){
    res.json({retCode:'NG', retMsg: '로그인 실패'});
  }

  res.json({retCode:'OK', token});
    // const user = await memberService.login(id,pass)
    // console.log(user)
    // if (user) {
    //   // falsy 처리[null, '', 0 , undefined]
    //   // session객체에 member_id, login_id, name에 저장
    //   const {member_id, login_id, name} = user;
    //   req.session.user = {member_id,login_id,name}
    //   // console.log(req.session.user)
      
    //   res.json({retCode :'OK'})
    // }
    // else {
    //   res.json({retCode : 'NG'})
    // }

  
}

module.exports = { signup,login }