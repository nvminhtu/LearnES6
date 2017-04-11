// demo: let

let x;
if(true) {
  let x = 1;
  console.log(x); // show ket qua ra 1
}
console.log(x); // show ket qua ra undefined vì let chỉ mang giá trị trong block {} if
