// forExe3.js
// 점수를 입력 * 5번.
//점수의 합(sum), 평균(average) 저장
//최대값 (max)


let sum=0;
let average =  0;
let max = 0;
let min = 1000;
for (let i = 1; i <= 5; i++){
  let inputValue = prompt('숫자를 입력하세요.');
  sum = sum + parseInt(inputValue);
  if(max < inputValue){
    max = inputValue;
  } if(min > inputValue){
    min = inputValue;
  }
}
average = sum /5;
console.log(`합계: ${sum} 평균: ${average} 최대값: ${max} 최소값: ${min}`)

//합계는