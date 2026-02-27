// 업무.
const boardModel = require('../models/boardModel');

// 서비스 = 모델 => 1:1 매칭.
// 글목록조회 업무.
async function getList() {
  return boardModel.getList();
  
}

// 단건조회 업무.
async function getDetail(id) {
  return boardModel.getById(id);
}

async function getInsert(title,content,id) {
  return boardModel.BoardInsert(title,content,id)
}

async function remove(id,user){
  console.log(id, user)
  const [rows] = await boardModel.getById(id)
  // 권한 체크
  const board = rows[0]
    console.log(board.writer_id)
    console.log(user.member_id)
    if(board.writer_id != user.member_id){
      return 'No_Auth';
    }

  return boardModel.remove(id)
}


module.exports = { getList,getDetail,getInsert, remove }