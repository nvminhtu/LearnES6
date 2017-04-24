//The Map data structure in ECMAScript 6 lets you use arbitrary values as keys and is highly welcome.
export function CustomMap() {
  let map = new Map();
  map.set('age', 30);
  map.set('firstname', 'Tu');
  map.set('lastname', 'Nguyen');

  let age = map.get('age');
  console.log('My age: ' + age);

  // check map has key
  if(map.has('age')) { console.log('co key age'); }

  // xoa key
  // map.delete('age');

  // Ngoài ra có thể kiềm tra được size của 1 map
  map.size; // return size of map
  // xóa tất cả key của map đã khởi tạo bên trên
  map.clear();
}

// khởi tạo 1 map với các mảng 2 chiều
export function KeyMap() {
  let map = new Map([
    ['sword','Knight'],
    ['hammer','Babarian'],
    ['gun','Cowboy']
  ]); // khởi tạo 1 map

  console.log(map.get('sword'));

  // thử cách khai báo khác
  let map2 = new Map();
  map2.set('ca','Captain America')
      .set('th','Thor')
      .set('iron','Iron Man')
  console.log(map2.get('ca'));

  // bất kỳ giá trị nào cũng có thể là 1 key, thậm chí là 1 object
  
}
