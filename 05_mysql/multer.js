// multer.js
// 한글 (latin1)  -> Buffer -> utf8 인코딩
// 딸기.jpg 
const multer = require('multer')
const path = require('path')



// console.log(Buffer.from('딸기').toString('utf-8'))

const storage = multer.diskStorage(({
  destination: function(req, file, cb){
    cb(null, 'uploads')
  },
  filename : function(req,file,cb){
    console.log(file)
    // 한글명 파일 처리
    const encfile = Buffer.from(file.originalname, 'latin1').toString('utf-8');
    const fn = path.basename(encfile, path.extname(encfile));
    const ext = path.extname(encfile);
    const uniqueName = 
    fn // sample.jpg
    + "_" + new Date().valueOf() // 177434324532
    + ext;
    // 
    cb(null, uniqueName);
  }
}));

// const storage2 = multer.diskStorage(({   //여기서는 안씀
//   destination: function(req, file, cb){
//     cb(null, 'files')
//   },
//   filename : function(req,file,cb){
//     console.log(file)
//     // 한글명 파일 처리
//     const encfile = Buffer.from(file.originalname, 'latin1').toString('utf-8');
//     const fn = path.basename(encfile, path.extname(file.originalname));
//     const ext = path.extname(encfile);
//     const uniqueName = 
//     fn // sample.jpg
//     + "_" + new Date().valueOf() // 177434324532
//     + ext;
//     // 
//     cb(null, uniqueName);
//   }
// }));

const upload = multer({ storage })
// const upload2 = multer({ storage : storage2 })

module.exports = { upload };