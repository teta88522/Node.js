// async, await



async function main() { 
  let data = 10;
  try {

  await new Promise(function(resolve){
  setTimeout(() => {
  console.log("1번째");
  data += 2
  console.log(`data => ${data}`)
  resolve(data)
},2000);
});

// 비동기방식 코드 -> 동기방식 코드
await new Promise(function(resolve){
  setTimeout(() => {
  console.log("2번째");
  data *= 2
  console.log(`data => ${data}`)
  resolve(data)
},2000);
});
const p3 = await new Promise(function(resolve){
  setTimeout(() => {
  console.log("3번째");
  data -= 2
  try{
  console.log(`data => ${data}`)
  resolve(data)}
  catch(err){
    reject(err);
  }
},1000);
});




  }
  catch(err){
    console.error(err);
    resolve(err);
    
  }
}//end of main
main();