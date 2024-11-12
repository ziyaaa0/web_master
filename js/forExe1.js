//forEXE1.js

//3*1=3
//3*2=6
//...
//3*9=27


document.write('<table border="2" style="">');
for (let j = 2; j <= 9; j++) {
  const num = j;
  for (let i = 1; i <= 9; i++) {
    if (i % 2 == 1) {
      document.write('<tr style ="background:pink"><td>' + num + ' * ' + i + '</td>' + '<td>=</td>' + '<td>' + num * i + '</td></tr><br>');


    } else {
      document.write(`<tr style ="background:black; color: #fff;"><td> ${num} * ${i} </td><td> = </td><td>  ${num*i}  </td></tr>`);
    }
  }
}
document.write('</table>');