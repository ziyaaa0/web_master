//switchCondition.js

let grade = 'C';
switch(grade) {
  case 'A' :
  document.write('90 ~ 100사이의 점수')
  break;
  case 'B' :
  document.write('80 ~ 89사이의 점수')
  break;
  case 'C' :
  document.write('70 ~ 79사이의 점수')
  break;
  case 'D' :
  document.write('60 ~ 69사이의 점수')
  break;
  default:
  document.write('60점 미만의 점수')
}