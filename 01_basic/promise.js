// // promise.js  비동기방식으로 처리되는 코드를 동기방식의 코드로 바꿔줌
// // promise 객체 : pending/ fulfilled/ reject
// fetch('MOCK_DATA.json') // 실제 실행되고 있는 data.html을 위치에 기준으로 연결해야함
// .then(resp => resp.json())
// .then(result => {
//   console.log("result =>", result);
// console.log('end of program')
// })
const promise = new Promise(function(resolve,reject){   //성공은 resolve 실패는 reject
  console.log("promise call");
  resolve("ok");
});

promise
.then(param => {
  console.log(param);
  return 1; // promise 처리
})
.then((param) => {
  console.log(param);
})
.catch((param) => {
  console.error(param);
})

let data = 10;

const p1 = new Promise(function(resolve){
  setTimeout(() => {
  console.log("1번째");
  data += 2
  console.log(data)
  resolve(data)
},2000);
})
// 비동기방식 코드 -> 동기방ㅂ식 코드
p1.then((data) => {
  return new Promise(function(resolve){
  setTimeout(() => {
  console.log("2번째");
  data *= 2
  console.log(data)
  resolve(data)
},3000)
});

}).then((data) =>{
  return new Promise(function(resolve){
    setTimeout(() => {
  console.log("3번째");
  data -= 7;
  console.log(data)
  // resolve('3')//
},1000);
})
  });


// 동기
// let answer = 5
// setTimeout(() => {
//   answer *= 2;
//   console.log(answer)
// setTimeout(() => {
//   answer += 2;
//   console.log(answer)
// setTimeout(() => {
//   answer -= 7;
//   console.log(answer)
// },1200)
// },1000)
//  },1500)






