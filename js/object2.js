//object2

// 함수: function.
// 함수 호출


let f1 = {name: '김민식', age: '25', height: 198};
let f2 = {name: '박민식', age: '29', height: 160};
let f3 = {name: '최민식', age: '30', height: 175};
let f4 = {name: '이민식', age: '25', height: 190};

let myFriends = [f1, f2, f3, f4]

friendListFnc()

//함수정의 => 실행은 호출을 통해
function friendListFnc() {
  console.log('friendListFnc()');

  let newName = document.querySelector('#name').value;
  let newAge = document.querySelector('#age').value;

  if(newName != '' && newAge != ''){
  myFriends.push({name: newName, age: newAge});
  }
  let html = '<table border="2">';

  html += '<thead><tr><th>이름</th><th>나이</th></tr></thead>'
  html += '<tbody>';

  for (let i = 0; i < myFriends.length; i++) {
    html += '<tr><td>' + myFriends[i]['name'] + '</td><td>' + myFriends[i]['age'] + 
    '</td></tr>';
    
  }

  html += '</tbody></table>';
  document.querySelector('#show').innerHTML = html;
}