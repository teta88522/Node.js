// ary.js
console.clear();

// 급여가 10000 적은 사람들.
const less_than_10000 = (elem,idx) => elem.salary < 10000 ? true : false
// filter() : 조건을 만족하는 요소
result = ary.filter((elem, idx, array) => {
  // console.log(elem,idx)
  if(elem.salary < 10000){
    return true;
  }
  else{
    false;
  }

})

result2 = ary.filter(less_than_10000)

console.log(result2)

// 여자중에서 8000이상인 사람.
const fm_8000 = (elem) => elem.gender == 'Female' && elem.salary >= 8000 ;

const fm8000_more = ary.filter(fm_8000)

console.log(fm8000_more)

// map() : A -> A'(매핑)
// id/first_name/last_name/email/gender/salary
// no/name/gender/salary 로 변환시키기
result = ary.filter(fm_8000).map((elem,idx,array) => {
  // 객체구조분해.
  // key의 변수명이 같다면 자동으로 같은곳의 배정
  const {id, first_name, last_name, gender, email, salary} = elem;
  const obj = {no: id, 
              name: first_name + '-' + last_name, 
              gender : gender, 
              salary : salary
            };
  return obj
}) ;

console.log(result)