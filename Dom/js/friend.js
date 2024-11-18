//추가 버튼에 이벤트.
//this => 함수: window객체, 이벤트핸들러: 이벤트대상, object: 객체자신.

function makeRow(friendInfo = {
  name,
  phone,
  birth,
  blood
}) {
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) {
    console.log(this.children[1].innerHTML);
    document.querySelector('input[name = "friendName').value = this.children[1].innerHTML;
    console.log(this.children[2].innerHTML);
    document.querySelector('input[name = "friendPhone').value = this.children[2].innerHTML;
    console.log(this.children[3].innerHTML);
    document.querySelector('input[name = "friendBirth').value = this.children[3].innerHTML;
    console.log(this.children[4].innerHTML);
    document.querySelector('select[name = "friendBloodtype').value = this.children[4].innerHTML;
  })

   let td = document.createElement('td');
   let btn = document.createElement('input');
   btn. setAttribute('type', 'checkbox');
   td.appendChild(btn);
   tr.appendChild(td);

  for (let prop in friendInfo) {
    let td = document.createElement('td');
    let fname = friendInfo[prop];
    td.innerHTML = fname; //<td> 홍길동 </td>
    tr.appendChild(td);
  }

  td = document.createElement('td');
  btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.setAttribute('class', 'btn btn-danger');
  btn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
  })
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}

//data.js
console.log(friendList);


friendList.forEach((friend) =>
  document.querySelector('#list').appendChild(makeRow(friend)));

document.querySelector('button.btn.btn-primary')
  .addEventListener('click', (e) => {

    let fname = document.querySelector('input[name="friendName"]').value;
    let ftel = document.querySelector('input[name="friendPhone"]').value;
    let fbirth = document.querySelector('input[name="friendBirth"]').value;
    let fblood = document.querySelector('select[name="friendBloodtype"]').value;



    if (!fname || !ftel || !fbirth || !fblood) {
      alert('필수값을 입력하세요');
      return;
    }



    let param = {
      name: fname,
      phone: ftel,
      birth: fbirth,
      blood: fblood
    }

    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    document.querySelector('input[name="friendName"]').value = '';
    document.querySelector('input[name="friendPhone"]').value = '';
    document.querySelector('input[name="friendBirth"]').value = '';
    document.querySelector('select[name="friendBloodtype"]').value = '';
  });


//수정 이벤트
document.querySelector('button:nth-of-type(2)')
  .addEventListener('click', (e) => {
    console.log('수정버튼.');
    let listTr = document.querySelectorAll('#list tr');
    let name = document.querySelector('input[name="friendName"]').value;
    let phone = document.querySelector('input[name="friendPhone"]').value;
    let birth = document.querySelector('input[name="friendBirth"]').value;
    let blood = document.querySelector('select[name="friendBloodtype"]').value;
    for (let i = 0; i < listTr.length; i++) {
      //수정할 대상 찾기.
      if (listTr[i].children[1].innerHTML == name) {
        //연락처 생일 혈액형 바꾸기
        listTr[i].children[2].innerHTML = phone;
        listTr[i].children[3].innerHTML = birth;
        listTr[i].children[4].innerHTML = blood;
      }
    }
  })

  document.querySelector('button.btn.btn-danger')
  .addEventListener('click', (e) => {
    document.querySelectorAll('#list tr')
    .forEach((item) => {
      if(item.children[0].children[0].checked){
        item.remove();
      }
    });
  });

  //전체선택하는 change 이벤트.




// let tr = document.createElement('tr');

// //이름.
// let td = document.createElement('td');
// td.innerHTML = fname; //<td> 홍길동 </td>
// tr.appendChild(td);


// //연락처.
// td = document.createElement('td');
// let ftel = document.querySelector('input[name="friendPhone"]').value;
// td.innerHTML = ftel; //<td> 홍길동 </td>
// tr.appendChild(td);

// //생일.
// td = document.createElement('td');
// let fbirth = document.querySelector('input[name="friendBirth"]').value;
// td.innerHTML = fbirth; //<td> 홍길동 </td>
// tr.appendChild(td);


// <tr></tr>