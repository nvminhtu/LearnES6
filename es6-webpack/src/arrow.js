export function mathFunc() {
    var multiply  = (x,y) => { return x * y; }
    console.log(multiply);
}

export function basicArrow() {
  // noi dung function
  var hello = (name, message) => {
    console.log("Chào " + name + ", bạn là khách của " + message);
  };

  hello('Tú','minhtu.net');
}

// sử dụng hàm map của array trong javascript.
// map => giống như vòng lặp, có 1 tham số truyền vào và đó là 1 callback function
// hàm callback này có 2 tham số truyền vào đại diện cho (val,key) của mỗi phần tử trong mảng

export function mapAndArrow() {

  // ví dụ thông thường
  var domain = ["minhtu.net","tungit.net","oplungphukien.com"];
  domain.map(function(val,key){
      console.log(val.toUpperCase());
      // lưu lại
      domain[key] = val.toUpperCase();
  });
  console.log(domain);

  // sử dụng arrow function
  var domain = ["minhtu.net","tungit.net","oplungphukien.com"];

  domain.map((val,key) => {
     console.log(val.toUpperCase());
     domain[key] = val.toUpperCase();
  });
  console.log(domain);

}
