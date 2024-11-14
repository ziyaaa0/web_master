//function1.js

let numAry1 = [50, 60, 40, 70, 20]
let numAry2 = [55, 63, 42, 79, 27]

console.log(sumAry(numAry1));
console.log(sumAry(numAry2));
console.log(sum(sumAry([10, 50, 25]), sumAry([10, 50, 25])));

console.log(sumAry(numAry2));


// 매개값을 배열로 받아서 배열요소의 합.
function sumAry(param1) {
  let sum = 0;
  for (let i = 0; i < param1.length; i++) {
    sum += param1[i];
  }
  return sum;
}

function sum(param1, param2) {
  let result = param1 + param2;
  return result
}

//배열을 매개값으로 받아서 제일큰값을 구하는 함수.
//함수 이름  getMaxValue(param)

function getMaxValue(param) {
  let max = 0;
  for (let i = 0; i < param.length; i++) {
    if (max < param[i]) {
      max = param[i];
    }
  }
  return max;
}

console.log(getMaxValue(numAry1));


//Math.random() 활용해서 11~20 사이의 임의 수 생성.
//배열[5]에 저장

function makeNumberFnc() {
  let randomAry = []
  for (let i = 1; i <= 5; i++) {
    let temp = parseInt(Math.random() * 10) + 11;
    randomAry.push(temp);
  }
  console.log(randomAry);
  let sum = sumAry(randomAry);
  return sum;
}
let result = makeNumberFnc();
console.log(`임의의 배열의 합은 ${result}`);