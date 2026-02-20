// reduce() - 이전 순번의 결과를 다음 순번의 매개값으로 활용,
ary.reduce((accm,elem,idx,array)=> {
  // console.log(idx,'=>',accm,elem);
  return elem;
},0);    // 0 은 맨 처음 accm

result = [10,20,30,45,55].reduce((accm,elem,idx) => {
console.log(idx,'->',accm,elem);
if(elem >= 20) {
  const li = document.createElement("li")
  li.innerText = elem;
  accm.appendChild(li)
}
return accm 
},document.querySelector('#list'));

console.log(result)

// 남자의 급여 합계
result = ary.reduce((accm,elem,idx,array)=> {
  const {salary,gender} = elem
  // console.log(idx,'=>',accm,elem);
  if(gender == 'Male'){
    accm += salary
    console.log(idx,accm,salary)
  }
  return accm;
},0);    // 0 은 맨 처음 accm

console.log('남성 총 급여',result)

// 여자의 급여가 만 이하 이고 사람들의 {번호/이름(fn+ln)/이메일/급여}
// 새로운 배열로 생성

console.clear()
ary_map = ary.map((elem) => {
  const {id, first_name, last_name, email, salary} = elem
  const obj = {no : id , name : first_name+'+'+last_name, email : email, salary : salary}
  return obj
})

ary_map_ft = ary_map.filter((elem,idx) => elem.salary <= 10000
)

result = ary_map_ft.reduce((accm,ele) =>{
  accm.push(ele)
  return accm
},[])

console.log(result)
