//exe3.js




let question = 3;
let result;

if (question == 1) {
  //1. 태어난 년도 입력 > 나이계산

  const TodayYear = 2024;
  let Birth = prompt('태어난 년도를 입력하세요.');

  result = TodayYear - Birth + 1;
  console.log("나이는 " + result)


} else if (question == 2) {
  // 2. 직사각형너비 계산 > 가로 세로 입력

  let param1 = prompt('가로 길이를 입력하세요.');
  let param2 = prompt('세로 길이를 입력하세요.');

  let result = 0;
  result = [param1] * [param2];
  console.log("직사각형 너비: " + result)

} else {
  //3. 최고값, 최소값 > 입력숫자는 3개

  let num1 = prompt('숫자1을 입력하세요.');
  let num2 = prompt('숫자2을 입력하세요.');
  let num3 = prompt('숫자3을 입력하세요.');
  //동일한 값이 있으면 처리 안함
  if (num1 == num2 || num2 == num3 || num1 == num3) {
    console.log('동일한 값이 존재합니다.');
  } else {
    let max = 0;
    if (num1 > num2) {
      if (num1 > num3) {
        max = num1
      } else {
        max = num3;
      }
    } else {
      if (num2 > num3) {
        max = num2;
      } else {
        max = num3;
      }

    }
  }

}