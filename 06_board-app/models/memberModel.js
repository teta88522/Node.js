const pool = require('../config/db')

async function memberInsert(id,name,pass,role) {
  const sql = `INSERT INTO tbl_member(login_id, name, password, role)
              values(?,?,?,?)`;
  return pool.query(sql,[id,name,pass,role])
  
}

async function findMemberById(id){
  const sql = `select * from tbl_member where login_id = ?`
  
  return pool.query(sql,[id])

}


module.exports =  {memberInsert,findMemberById} 