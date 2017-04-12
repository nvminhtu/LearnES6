// 0 -- global function --------------------------------

export const PI = 3.14;
export const value = 42;
export const table = { foo: 'bar' };

// null function
export function hello() {};

// 1 -- test export --------------------------------
// animal data functions
export function speak () {
  return 'moo';
}

export function eat () {
  return 'cow eats';
}

export function drink () {
  return 'cow drinks';
}
// -- end test export

// 2 -- Let --------------------------------
export function letVariables() {
  let x;
  if(true) {
    let x = 1;
    console.log(x); // show ket quả ra 1
  }
  return x;  // show ket qua ra undefined vì let chỉ mang giá trị trong block {} if
}
