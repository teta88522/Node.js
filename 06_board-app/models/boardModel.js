// 게시글 CRUD 기능
const pool = require('../config/db')

async function getList() {
  const sql = `
    SELECT b.*, m.login_id , m.name
    FROM tbl_board b
    JOIN tbl_member m ON b.writer_id = m.member_id
    ORDER BY b.board_id DESC`;

  return pool.query(sql);
}

async function  getById(id) {
  const sql = ` SELECT b.*, m.login_id , m.name
    FROM tbl_board b
    JOIN tbl_member m ON b.writer_id = m.member_id
    WHERE b.board_id = ?`
    ;
    return pool.query(sql,[id]);
}

async function BoardInsert(title,content,writer_id) {
  const sql = `INSERT INTO tbl_board(title, content, writer_id)
              values(?,?,?)`;
  return pool.query(sql,[title,content,writer_id])
  
}

module.exports =  { getList,getById,BoardInsert } 