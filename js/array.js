//aray.js

let numAry = new Array(); //[]; 배열객체 생성.
numAry[0] =10;
numAry.push(20);
numAry.push(25);
numAry.push(35);

//첫번째 제거. shift
//마지막 제거. pop
numAry.shift();
numAry.pop();
numAry.unshift(99); //unshift 첫번째에 추가

console.log(numAry.length);
//배열에는 for of 사용 : 안에 값이 필요할땐 of
for(let number of numAry){ //배열만 사용 가능
  console.log(number);
}

//배열일 경우에 method.
numAry.forEach(function (param1, param2, param3){
console.log(param1, param2, param3)
//         (배열요소, 배열인덱스, 배열자신)
});

//배열의 합계.
let sum = 0;
// numAry.forEach(function(elem, idx, ary){
//   sum += elem;
// });
//화살표함수로 줄임
numAry.forEach(elem => sum += elem);
console.log(`배열의 합계: ${sum}`)


let obj = {
  name: "Hong",
  age: 20,
  weight: 66
}

//object 에는 for..in 반복문
for(let prop in obj){
  console.log(prop);
}