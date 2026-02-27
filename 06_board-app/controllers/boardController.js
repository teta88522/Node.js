// 컨트롤 (라우터 핸들러)
const boardService = require("../services/boardService")

const list = async (req,res) => {
  const [rows] = await boardService.getList();
  // console.log(req.session.user.login_id)
  // console.log("현재 로그인 정보: ", req.session.user.login_id)
  res.json(rows);
};

// 상세조회
const detail = async (req,res) => {
  const {id} = await req.params
  const [rows] = await boardService.getDetail(id)
  console.log(req.session.user)
  // 현재 로그인 정보 (login_id, name)
  const {login_id,name,member_id} = req.session.user || {
    login_id : '',
    name : '',
    member_id:''
  };
  res.json({user : {login_id, name, member_id }, data : rows}); // 화면에 출력된 결과
}

const insert = async (req,res) => {
  const {title,content} = req.body 
  const writer_id = req.user.member_id

  try {
    await boardService.getInsert(title,content,writer_id)
    res.json({ retCode: "OK" });
  } catch (err) {
    console.log(err);
    const msg = err ? err.sqlMessage : "알 수 없는 예외발생";
    res.json({ retCode: "NG", retMsg: msg });
  }
};

const remove = async (req,res) =>{
  const {id} = req.params
  // console.log(id)
  const result = await boardService.remove(id, req.user);
   console.log(result);
  if(result == 'No_Auth'){
    return res.json({retCode : 'NG', retMsg : '권한없음'})
  }
  res.json({retCode : 'OK'})
}

module.exports = { list,detail,insert,remove }