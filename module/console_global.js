console.log(`hello world`) // 일반적인 로그 
console.log('hello %s', 'world') // %s 를 사용하여 문자열 데이터를 파라미터로 전달

const world = 'world';
console.log(`hello ${world}`) // 자바 스크립트의 리터럴 문법 사용

console.error(new Error('에러 메시지 출력')); // 에러 로그 출력

const arr = [
  {name : 'John Doe', email:'john@mail.com'},
  {name : 'Jeremy Go', email:'jeremy@email.com'}
];
console.table(arr);

const obj= {
  students: {
    grade1 : {class1:{},class:{}},
    grade2 : {class1:{},class:{}},
    teacher : ['John Doe','Jeremy Go']
  }
}

console.dir(obj, {depth:1,colors:true}); // 오브젝트를 콘솔에 출력하는데, 출력할 오브젝트의 깊이와 
    // 콘솔 메시지 텍스트에 색상을 적용
   // 풀어서 얘기하면 코드가 얼마나 실행되는지 시간 체크 변수를 그 함수를 알아볼 수 있게 작성하면됨
 

console.time('time for for-loop');
for(let i =0 ; i<9999; i++){
  console.log(i)
}
console.timeEnd('time for for-loop')

// 1단계부터 6단계까지 중첩된 객체를 만듭니다.
// const myObject = {
//   level1: {
//     message: "안녕! 난 1단계야",
//     level2: {
//       message: "난 2단계!",
//       level3: {
//         message: "여긴 3단계!",
//         level4: {
//           message: "거의 다 왔어, 4단계!",
//           level5: {
//             message: "내가 바로 5단계야! 여기까지는 내용을 다 보여줄 거야.",
//             level6: {
//               message: "난 6단계라서 depth: 5 설정에서는 안 보이고 [Object]로 뭉뚱그려져서 보일걸?"
//             }
//           }
//         }
//       }
//     }
//   }
// };

// // 위에서 만든 객체를 5단계 깊이까지만 펼쳐서 보여줍니다.
// console.dir(myObject, { depth: 5, colors: true });