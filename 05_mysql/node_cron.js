const cron = require("node-cron");
const {logger} = require('./winston')
const nodemailer = require("./nodemailer")

cron.schedule('*/10 * * * * *', () => {
  // console.log(Date.now())
  nodemailer.send({from:'swotjd9805@daum.net',
    to : "swotjd9805@naver.com",
    subject : "스케줄러",
    text : "node cron 실행합니다."
  })
  logger.info("cron job 실행")
});
