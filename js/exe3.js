//exe3.js




let question =3;

if(question == 1){
//1. 태어난 년도 입력 > 나이계산

let TodayYear = 2024;
let Birth = prompt('태어난 년도를 입력하세요.');

result = TodayYear - Birth + 1;
console.log("나이는 " + result) 


} else if(question == 2){
// 2. 직사각형너비 계산 > 가로 세로 입력

let param1 = prompt('가로 길이를 입력하세요.');
let param2 = prompt('세로 길이를 입력하세요.');

let result = 0;
result = [param1] * [param2];
console.log("직사각형 너비: " + result)

}else {
//3. 최고값, 최소값 > 입력숫자는 3개


let Value1 = prompt('숫자1을 입력하세요.');
let Value2 = prompt('숫자2을 입력하세요.');
let Value3 = prompt('숫자3을 입력하세요.');

if(Value1 < Value2 < Value3){
  alert(Math.max(Value1, Value2, Value3))
} else if(Value1 < Value3 < Value2){
  alert(Math.min(20, 23, 27))
} else if(Value2 < Value3 < Value1){
  alert("최소값 "+ Value2 + "최대값 " + Value1)
} else if(Value2 < Value1 < Value3){
    alert("최소값 "+ Value2 + "최대값 " + Value1)
}else if(Value3 < Value2 < Value1){
  alert("최소값 "+ Value3 + "최대값 " + Value1)
}else if(Value3 < Value1 < Value2){
  alert("최소값 "+ Value3 + "최대값 " + Value2)
}



}













