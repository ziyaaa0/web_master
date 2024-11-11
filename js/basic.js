// basic.js
//변수. 메모리 주소(23dfa3423432)
let name = "지"; //String 타입.
console.log(typeof name);
var age = 20;
console.log(age);
console.log(name);

var age = 30;
console.log(age);
// let name = "친구"; // 개발자: 에러날 수 있는 코드 확인. let 여러번 사용불가

// 변수: 값을 담을 수 있는 유형. 데이터타입.
let num = 10; //Number 타입
console.log(typeof num);
let isOK = true; //Boolean 타입.
console.log(typeof isOK);

//원시데이터타입(값을 하나만 담을 수 있는) vs.복합데이터타입
let obj = {name: "홍길동", age: 20, height: 180} //object타입
console.log("이름은: " + obj.name);
console.log("나이는: " + obj["age"] + ' 살');

num = 20;
isOK = false;
name = "김친구";
obj = {name: "희", age: 22}

num = true;
console.log(typeof num);
isOK = 30;
name = 50;

const num1 = 10; //const 는 새로운 값 입력 불가. 변하지 않는 고정값.
//num1 = 20; 

let pi = 3.14;
console.log(2 * 4 * pi)

let countPerStudent = 5;
let count_per_student = 5;

//변수: 연산가능.
let number1 = 100;
let result = 10
let message = "Welcome";

result = message + (number1 + 20); //concatenate 연결해주는 연산 ex. Welcome10020

result = message - number1; //NaN notanumber
console.log(result);

let inputValue = prompt('인덱스를 입력하세요');  //사용자가 입력한값 담음
// console.log(message + inputValue);
//document.write('<h1>' + message + inputValue + '</h1>');
let num2 = 0, friendName = "", over30 = false;
let friends = null; //아무값도 없는 상태.
friends = ['김길동', '이길동', '최길동'];
console.log(inputValue + '번째 인덱스 이름은' + friends[inputValue]); //배열의 순번(index) 0부터 시작
