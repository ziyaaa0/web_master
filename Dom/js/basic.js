 // Document Object : 객체(속성, 메소드)
 let ulDom = document.querySelector('ul');    
 console.log(ulDom.children[0].innerHTML);

 //Dom 객체에는 메소드 (객체생성 메소드: createElement()).
 let liTag = document.createElement('li'); //<li></li> 요소 생성.
 liTag.innerHTML = '수박'; //<li>수박</li>
 ulDom.appendChild(liTag); // ulDom요소의 자식요소로 lin 등록. (어느 위치에 넣을지)

 let pDom = document.querySelector('#show');
 
 let pTag = document.createElement('p');
 pTag.innerHTML = '<b>Welcome</b>';
 pDom.appendChild(pTag);

 let btn = document.createElement('button');
 btn.innerHTML = '<b>삭제</b>';
 btn.addEventListener('click', (e) => {
 //   console.log(e.target.previousElementSibling);
 document.querySelector('ul').children[0].remove();
 })
 document.querySelector('#show').appendChild(btn);