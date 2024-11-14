//builtIn.js (내장객체)

//날짜(Date객체)

let today = new Date();
today.setFullYear(2023);
today.setMonth(4);
today.setDate(31);

today.setFullYear(2023,4,31);

console.log(today);
console.log(showTime(today)); //년도
console.log(`월: ${today.getMonth()+1}`)
console.log(`일: ${today.getDate()}`)
console.log(`요일: ${today.getDay()}`)
today.getHours


function showTime(time = new Date()) {
  let yyyy = time.getFullYear();
  let MM = time.getMonth() + 1;
  let dd = time.getDate();

  let HH = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();
  console.log(('' + ss).length);
  ss = ('' + ss).length == 1 ? '0' + ss : ss;

  
  let day = time.getDay();
  let  days = ['일', '월', '화', '수', '목', '금', '토']

  return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + dd + ':' + ss +' '+ days[day]+'요일';
}
  
