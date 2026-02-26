// 컨트롤 (라우터 핸들러)
const boardService = require("../services/boardService")

const list = async (req,res) => {
  const [rows] = await boardService.getList();
  console.log(req.session.user.login_id)
  console.log("현재 로그인 정보: ", req.session.user.login_id)
  res.json(rows);
};

// 상세조회
const detail = async (req,res) => {
  const {id} = await req.params
  const [rows] = await boardService.getDetail(id)
  res.json(rows); // 화면에 출력된 결과
}

const insert = async (req,res) => {
  const {title,content,writer_id} = req.body 
    await boardService.getInsert(title,content,writer_id)
    if(title.affectedRows){
      res.json({retCode :'OK'})
      console.log(title)
    }
    else{
      res.json({retCode:'NG', retMsg : "실패하였습니다"})
    }

  
}

module.exports = { list,detail,insert }