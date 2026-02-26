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


module.exports = { getList,getDetail,getInsert }