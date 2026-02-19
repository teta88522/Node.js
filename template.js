// const {ary} = require("./data");

// "hello",'world',`hokildong`

// 연산식을 사용
const obj = {
  name : 'HongKildong',
  age : 20,
  showInfo: function(){
    return `이름:${this.name}나이:${this.age}입니다` 
  }
}

console.log('이름은' + obj['name']  + '이고', '나이는' + obj[`age`]);
console.log(
  `이름은 ${obj['name']} 이고, 나이는 ${obj['age']} 이고 ${obj.age >=20}`
);

console.log(`obj의 정보 : ${obj.showInfo()}`);

console.log(
  `남자들의 이름은 ${ary
    .filter((elem) => elem.gender == 'Male')
    .map((elem) => elem.first_name)
    .join(",")}`
)

// spread operator (펼침 연산지)
const ary1 = [1,2,3];
const ary2 = [4,5,6];

const ary3 = [...ary1,...ary2];
console.log(ary3)

// 객체 구조분해(destructuring)
const obj1 = {first_name: "kill dong", last_name : 'hong', age : 20};
const { first_name, last_name, age} = obj1

//배열 구조분해(destructuring)
const [a1, ...a2] = ary1;
console.log(a1,a2);

// const [m1,m2,m3] = getMember();
// const [meda, rows] = conn.execute('select * from boarc')
// console.log(m1,m2,m3)

// default parmeter function (매개변수의 초기값)
function sum(n1 = 0,n2 = 0,...args){
  let result = n1 + n2;
  for (let i = 0 ; i < args.length ; i++){
    result += args[i];
  }
  return result;
}

let result = sum(1,2,3,4,5,346,346,343)
console.log(result)

