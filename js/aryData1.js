//aryData1

document.querySelector('#inputValue').remove(); //요소(element)삭제
document.querySelector('#addBtn').remove(); //요소(element)삭제
document.querySelector('span').remove(); //요소(element)삭제

let numAry = [23, 45, 34, 78, 51, 98];
let sum =0;
for (let i = 0; i <numAry.length; i++){
 console.log(`${i} 위치=> ${numAry[i]}`); 
 if(numAry[i]%2 == 0) {
 sum += numAry[i];}
 
} console.log(`numAry의 각 요소의 합 => ${sum}`); 






// let n = prompt('아무값 입력');
// let numAry = [23, 45, 34, 78, 51, 98];
// let sum =0;

// for (let i = 0; i <numAry.length; i++){
//   if(parseInt(n) < numAry[i]){
//     sum += numAry[i];
//   }
// }
// console.log(sum);

// 입력한 정수보다 큰값들 누적해서 반환