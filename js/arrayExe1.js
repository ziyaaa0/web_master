// arayExe1.js

let numAry = [34];

numAry.unshift(44);
numAry.unshift(24);
numAry.push(83);
numAry.push(22);

numAry.shift(24);

numAry.unshift(77);

console.log(numAry);

numAry.splice(1, 1, 55); //수정 (인덱스, 몇개수정할건지, 대체값) 
//대체할값을 넣지않으면 삭제됨 // 몇개수정할지에 0 입력시 추가

console.log(numAry);

let dayAry = []; //요일을 담는 변수

//수요일, 화요일,토요일, 금요일,월요일, 일요일, 목요일

dayAry.splice(0,0, '수요일'); //일
dayAry.splice(0,0, '화요일'); //월
dayAry.splice(5,0, '토요일'); //화
dayAry.splice(2,0, '금요일'); //수
dayAry.splice(0,0, '월요일'); //목
dayAry.splice(0,0, '일요일'); //금
dayAry.splice(4,0, '목요일'); //토

console.log(dayAry);

console.log(dayAry.indexOf('화요일'))