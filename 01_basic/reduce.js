const {ary,ore} = require("./data")

// console.log(ary)

// Male 인 목록.
// {Male : [{},{},{},{}...{}]}
const result = ary.reduce( 
  (accm,elem) => {
    if(elem.gender=='Male'){
      accm.Male.push(elem)
    }
  
  return accm}                      //첫번째 매개값은 함수);
,{Male : []});

const groub_by_gender = (accm,elem)=>{
  if (accm[elem.gender] == undefined){{
    accm[elem.gender] = []; // 초기값
  }}
  accm[elem.gender].push(elem.first_name)
  return accm;
};

res = ary.reduce(
  groub_by_gender,{}
);

console.log(res)

