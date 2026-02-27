// 중간 관리자
const jwt = require('jsonwebtoken')

const authCheck = async (req,res,next) => {
  console.log('middleware1...');
  console.log(req.session.user)
  if(req.session.user){
    next(); // 다음에 올 middleware OR handler 호출
  }
  else{
    return res.send({retCode:"NG", retMsg: "권한이 없음."})
  }
  next()
}

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);


  if(!authHeader){
    res.json({retCode:'NG',
              retMsg:'토큰값이 없음'
    });
  }

try{
  const token = authHeader.split(' ')[1]
  const decoded = jwt.verify(token,"secret-token");
  req.user = decoded
  console.log(req.user)
  next();
  
}catch(err){
  return res.json({retCode:'ng', retMsg:'토큰오류'})
}


};

module.exports = {authCheck,verifyToken};
