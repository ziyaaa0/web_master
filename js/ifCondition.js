// ifCondition.js    if 조건문
//boolean => true, false

let isOK = true;
let age = 15;
console.log(isOK);
let result = isOK != "true"; //typeof result =>boolean
result = 34 < 20;

if (age >= 20) {
  // if 블럭.
  alert('성인 입니다!');
} else{
  alert('미성년자 입니다!')
}
