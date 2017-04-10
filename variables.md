# Variables in ES6

### let/const

ES6 bổ sung thêm cách khai báo biến cục bộ (Block-scoped variables), 
* let khai báo biến trong block mà không làm ảnh hưởng đến giá trị trong block khác, 
* hoặc const cho các biến không thay đổi giá trị. 
* Ngoài ra let chỉ có giá trị trong phạm vi block code được khai báo.

```
const koa = require('koa');
if(true) {
  let x = 1;
  console.log(x); // in ra: "1"
}
console.log(x);  // undefined x do x chỉ được khai báo trong khối lệnh if() { ... }
```