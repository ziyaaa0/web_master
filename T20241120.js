function makeRow(bookInfo = {
  bookCode,
  bookName,
  author,
  press,
  price
}) {
  
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) {
    console.log(this.children[1].innerHTML);
    document.querySelector('input[name="bookCode"]').value = this.children[1].innerHTML;
    console.log(this.children[2].innerHTML);
    document.querySelector('#bookName').value = this.children[2].innerHTML;
    console.log(this.children[3].innerHTML);
    document.querySelector('#author').value = this.children[3].innerHTML;
    console.log(this.children[4].innerHTML);
    document.querySelector('#press').value = this.children[4].innerHTML;
    console.log(this.children[5].innerHTML);
    document.querySelector('#price').value = this.children[5].innerHTML;
  })

  let td = document.createElement('td');
  let btn = document.createElement('input');
  btn.setAttribute('type', 'checkbox');
  btn.setAttribute('type', 'checkbox');
  btn.addEventListener('click', (e) => e.stopPropagation());
  btn.addEventListener('change', (e) => {
    document.querySelector('thead input[type="checkbox"]').checked = true;
    document.querySelectorAll('tbody input[type="checkbox"]').forEach(item => {
      if(!item.checked) {
      document.querySelector('thead input[type="checkbox"]').checked = false;
    }
  })

  });

  td.appendChild(btn);
  tr.appendChild(td);

  for (let prop in bookInfo) {
    let td = document.createElement('td');
    let code = bookInfo[prop];
    td.innerHTML = code;
    tr.appendChild(td);
  }

  td = document.createElement('td');
  btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.setAttribute('class', '#remove');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.target.parentElement.parentElement.remove();

  }) 
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;

}

 

//booklist
bookList.forEach((elem) =>
  document.querySelector('#list').appendChild(makeRow(elem)));

document.querySelector('#save')
  .addEventListener('click', (e) => {


let bookCode = document.querySelector('#bookCode').value;
let bookName = document.querySelector('#bookName').value;
let author = document.querySelector('#author').value;
let press = document.querySelector('#press').value;
let price = document.querySelector('#price').value;

if (!bookCode || !bookName || !author || !press ||!price) {
  alert('필수값을 입력하세요');
  return;
}



let param = {
  bookCode,
  bookName,
  author,
  press,
  price
}

let tr = makeRow(param);
document.querySelector('#list').appendChild(tr);

document.querySelector('input[name="bookCode"]').value = '';
document.querySelector('input[name="bookName"]').value = '';
document.querySelector('input[name="author"]').value = '';
document.querySelector('input[name="press"]').value = '';
document.querySelector('input[name="price"]').value = '';

});