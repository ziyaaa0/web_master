//exe4
//우리반에는 5명의 친구. 성적을 입력
//합산 > 평균, 최고점수 최저점수 구한후에
//우리반 평균은 ?? 최고점수 ? 최저점수

document.querySelector('#inputValue').remove(); //요소(element)삭제
document.querySelector('#addBtn').remove(); //요소(element)삭제
document.querySelector('span').remove(); //요소(element)삭제




// let numAry = [90, 45, 85, 75, 50];





let numAry = [];
for (let i = 1; i <=5; i++){

let inputValue = prompt('점수 입력');
numAry.push(parseInt(inputValue));
}

let sum = 0;
let average = 0;
let max = 0;
let min = 100;

for (let i = 0; i < numAry.length; i++) {
  sum += numAry[i];
  if (max < numAry[i]) {
    max = numAry[i];
  } 
  if (min > numAry[i]) {
    min = numAry[i];
  }
  average = sum/numAry.length;
}

console.log(`우리반 평균은 ${average}, 최고점은 ${max}, 최저점은 ${min}`)



