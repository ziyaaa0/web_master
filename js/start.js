//start.js
//Document Object Mode => DOM , Object(객체) 속성, 기능
//                              사람: 키,몸무게, (속성)- 시력 수치로 나타낼 수 있는것
//                                    먹다, 뛰다, 잔다 (기능)
let show = document.querySelector('#show'); // <div id="show" />
show.innerHTML = '<b>Hello, World</b><button onclick="deleteFunc()">삭제</button>';
show.addEventListener('mouseover',function(e){
  e.target.style.backgroundColor = 'red';
});
console.log(show);

function deleteFunc() {
  alert('삭제 버튼을 클릭했습니다.');
}

//console.log()
//document.write() <-함수
document.write('<ul><li>Apple</li><li>Banana</li></ul>')