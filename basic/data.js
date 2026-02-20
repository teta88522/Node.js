const data = `[{"id":1,"first_name":"Agretha","last_name":"Porrett","email":"aporrett0@vimeo.com","gender":"Female","salary":14594},
{"id":2,"first_name":"Mozes","last_name":"Martignon","email":"mmartignon1@dot.gov","gender":"Male","salary":6787},
{"id":3,"first_name":"Rodolfo","last_name":"Szabo","email":"rszabo2@creativecommons.org","gender":"Male","salary":3977},
{"id":4,"first_name":"Garald","last_name":"Borsi","email":"gborsi3@vkontakte.ru","gender":"Male","salary":6251},
{"id":5,"first_name":"Luella","last_name":"Freda","email":"lfreda4@theglobeandmail.com","gender":"Female","salary":5684},
{"id":6,"first_name":"Courtenay","last_name":"Tebbs","email":"ctebbs5@photobucket.com","gender":"Female","salary":3714},
{"id":7,"first_name":"Quincey","last_name":"Bexon","email":"qbexon6@rakuten.co.jp","gender":"Male","salary":14124},
{"id":8,"first_name":"Joann","last_name":"Cutriss","email":"jcutriss7@hugedomains.com","gender":"Female","salary":9647},
{"id":9,"first_name":"Nanny","last_name":"Hartright","email":"nhartright8@devhub.com","gender":"Female","salary":9843},
{"id":10,"first_name":"Halette","last_name":"Sucre","email":"hsucre9@xrea.com","gender":"Female","salary":7592},
{"id":11,"first_name":"Bel","last_name":"Franke","email":"bfrankea@google.pl","gender":"Female","salary":9028},
{"id":12,"first_name":"Fina","last_name":"Linley","email":"flinleyb@pinterest.com","gender":"Female","salary":9568},
{"id":13,"first_name":"Alyosha","last_name":"Amthor","email":"aamthorc@paginegialle.it","gender":"Male","salary":10725},
{"id":14,"first_name":"Terrie","last_name":"Piatto","email":"tpiattod@cnbc.com","gender":"Female","salary":11357},
{"id":15,"first_name":"Ramon","last_name":"Cuddihy","email":"rcuddihye@who.int","gender":"Male","salary":3823},
{"id":16,"first_name":"Louis","last_name":"McKirdy","email":"lmckirdyf@lulu.com","gender":"Male","salary":5478},
{"id":17,"first_name":"Willa","last_name":"Chadburn","email":"wchadburng@phoca.cz","gender":"Female","salary":7272},
{"id":18,"first_name":"Van","last_name":"Argue","email":"vargueh@naver.com","gender":"Female","salary":14403},
{"id":19,"first_name":"Raynell","last_name":"MacCrackan","email":"rmaccrackani@e-recht24.de","gender":"Female","salary":7239},
{"id":20,"first_name":"Stanislas","last_name":"Mannie","email":"smanniej@psu.edu","gender":"Male","salary":4822}]`
//json 문자열 -> Object
const ary = JSON.parse(data);
// console.log(ary);


//object -> JSON
const json = JSON.stringify(ary);
// console.log(json);

// sort() 정렬
// console.log(['Hello','Hi','Good','World'].sort())
// console.log([10,35,12,4,51,65,37,54].sort((n1,n2) =>  // n1 - n2 오름차순 n2 - n1 내림차순
//   n2 - n1 
//   )
// )     

// id 순으로 정렬 함수
const order_by_id = (obj1,obj2) => obj2.id - obj1.id

// salary 오름차순정렬.
const order_by_salary = (obj1, obj2) => obj1.salary - obj2.salary

// first_name 오름차순으로 정렬.
const order_by_fn = (obj1,obj2) => obj1.first_name < obj2.first_name ? -1 : 1;

// console.log(ary.sort(order_by_fn)); // 아이디 기준으로 정렬

// if('hello' > 'nice'){
//   console.log('hello');
// }
// else {
//   console.log('nice');
// }


// module.exports = {ary, order_by_fn}