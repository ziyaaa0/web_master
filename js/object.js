//object 객체
let ary = [];
let obj = {
  name: '홍길동',
  age: 20,
  height: 180
};

console.log(`이름: ${obj.name}, 나이: ${obj['age']}`);

obj.age = 28; //값 변경 가능
console.log(`이름: ${obj.name}, 나이: ${obj['age']}`);

//object타입에서 속성을 반환 반복문, for ..in 반복문
for (let prop in obj) {


  console.log(`prop => ${prop}, 값 => ${obj[prop]} `)
}

ary.push(obj);
ary.push({
  name: '김민식',
  age: '25',
  height: 198
});
ary.push({
  name: '최홍식',
  age: '29',
  height: 190
});

let searchName = '홍길동';

for (let i = 0; i < ary.length; i++) {
  if (ary[i]['name'] == searchName) {
    console.log(`이름은 ${ary[i]['name']}, 나이는 ${ary[i]['age']}, 키는 ${ary[i]['height']}`);
  }
}
sum=0;
for (let i = 0; i < ary.length; i++) {
  sum += ary[i]['height']
}
 average = (Math.round(sum/ary.length*100)/100);
 console.log(`평균키: ${average}`);

