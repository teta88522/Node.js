// path.js

const path = require("path");
const fs = require('fs')


console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename, path.extname(__filename)))
console.log(path.extname(__filename))

console.log(path.parse(__filename)); // parse => root, dir, base
console.log(path.format({dir:`d:\\git\\node.js`,base:"sample.txt"}));
console.log(path.join('D:\\git','node.js', 'module', 'sampe.txt'));



const filePath = path.join(__dirname,'package.json')
// file i/o 처리
fs.readFile(filepath,'utf-8',(err,data) => {  // readFile은 비동기 처리함수
  if(err) {
    console.log(err);
    return
  }
console.log(data)
})
// const data = fs.readFileSync(filePath,'utf-8')
// console.log(data)

fs.writeFile(__dirname+'\\todo.txt','연습입니다',(err) => {
  if(err){
    console.log(err);
    return
  }
  console.log('write done')
})

console.log('end of program')
