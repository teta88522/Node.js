// exp.js
// 문자열 특정패턴 찾기.
console.log("Hello, World".replace(/l/g,"L"));  // g는 전역 선택
console.log(/^(01[016789]|02|0[3-9]{1}[0-1,4-9]{1})-?(\d{3,4})-?(\d{4})$/i.test("010-1234-5678")); // 대응하는 값이 있으면 true 반환 i는 대문자 소문자 신경x
let result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test("test@gamil.com");
console.log(result)