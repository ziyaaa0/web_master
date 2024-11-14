// event.js

console.dir(document);
document.onclick = function (){
//   document.location.href = 'https://www.daum.net';
}

document.querySelector('#showBtn').addEventListener('click', function () {
  console.log('버튼 클릭!');
  document.querySelector('#desc').style.display = 'block';
});

//이미지바꾸기
// document.querySelector('#changeImg').addEventListener('click', function () {
//   console.log('이미지 바꾸기');
//   document.querySelector('img').src = 'img/어피치.png';
// });                     //바꾸고싶은값   //넣을값

let imgAry = ['레드향.jpg','apple.jpg','어피치.png','peach.jpg']
let idx = 0;

document.querySelector('#changeImg').addEventListener('click', function () {
  if(idx > 3){
    idx = 0;
  }
  let imageName = imgAry[idx++];
  document.querySelector('img').src = 'img/' + imageName;
});







//숨기기버튼
document.querySelector('#hideBtn').onclick = function () {
  console.log('닫기');
  document.querySelector('#desc').style.display = 'none';
};

//이미지에 이벤트 등록
document.querySelector('img').addEventListener('mouseover', function () {
  document.querySelector('#desc').style.display = 'block';
})
document.querySelector('img').addEventListener('mouseout', function () {
  document.querySelector('#desc').style.display = 'none';
})