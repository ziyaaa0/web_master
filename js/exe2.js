//exe2.js
//if...else 문제
let isOK = true;
let number1 = 30;
console.log(isOK);

let result = isOK != "true";
let inputValue = prompt('숫자를 입력하세요.[0~100]');
if(inputValue > 100 || inputValue < 0){
  alert("0 ~ 100숫자를 입력하세요.")
} else if(inputValue > number1){
  alert(inputValue + "는" + number1 + "보다 큽니다.")
} else if(inputValue == number1){
  alert(inputValue + "는" + number1 + "는 같습니다.")
}else {
  alert(inputValue + "는" + number1 + "보다 작습니다.")
} 

//사용자가 값을 입력하도록 "숫자를 입력하세요(0~100)"
// 변수선언 후 저장.

//35는 30보다 큽니다.
//25는 30보다 작습니다.