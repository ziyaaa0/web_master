// forExe4.js
let fname1 = '';
let fname2 = '';
let fname3 = '';
//원시자료형

let fnames = []; //배열변수 선언.
// fnames[0] = '홍';
// fnames[1] = '김';
// fnames[2] = '박';
// //push(값)
// fnames.push('박지희');
//배열의 크기를 반환: length

function addFriendFnc(){
  //사용자 입력값을 확인 => 목록으로 출력.
  let fname = document.querySelector('#inputValue').value;
  fnames.push(`<p>${fname}</p>`);


  //출력
  let str ='';
  for (let i = 0; i < fnames.length; i++){
    str = str + fnames[i];
  }
  document.querySelector('#show').innerHTML = str;

}
  //방법2
  // document.querySelector('#show').innerHTML = 
  // document.querySelector('#show').innerHTML + `<p>${fname}</p>`;
