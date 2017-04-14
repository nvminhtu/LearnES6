export function Destructuring() {
  //let [x,y] = ['100','50'];
  let [x,y, ...rest] = ['100','50','530','320']; // using spread operator
  // x = 100, y = 50, rest =['530','320']
  [x,y] = [y,x];
  console.log([x,y]);
}
