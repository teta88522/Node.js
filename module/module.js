// 공유
const {boardList,UserName}  = require("./board");
const { logger } = require("./console_class");

logger.log(UserName);
let result = boardList();

for (let board of result) {
  logger.log(`글번호 ${board.bno}, 글제목 ${board.title}`)
}
