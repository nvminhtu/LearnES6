export function Definition(){
  //spread operator
  var plus = (x,y) => { return x + y; }
  help();

  var values = [1,2];
  var sum = plus(...values); // it will return 3
  console.log(sum);
}
function help() {
  console.log('help information');
}
