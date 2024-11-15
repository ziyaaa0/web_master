// arrayExe3

/*let friendAry = [
  {name: "홍길동", age: 20, weight: 56.7},
  {name: "김민기", age: 21, weight: 93.7},
  {name: "박철순", age: 22, weight: 79.7},
  {name: "이만수", age: 23, weight: 88.7}
]

let temp = friendAry.filter((friend) => {
  if(friend.weight > 60){
    console.log(friend);
    return true;
}
  return false;
});
console.log(temp);*/

let femaleAry = empAry.filter(function (elem) {
  if (elem.gender == 'Female' && elem.salary >= 5000) {
    return true;
  }
  return false;
})


// let femaleAry = empAry.filter((elem) => {
//   return elem.gender == 'Female' && elem.salary >=5000;
// })


console.log(femaleAry);



  let numAry = [];
  for (let i = 0; i < 6;i++) {
      let temp = parseInt(Math.random() * 45) + 51;
      
          numAry[i] = temp;
          
   }
console.log(numAry);