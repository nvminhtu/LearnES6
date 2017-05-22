// demo link: http://2ality.com/2013/06/basic-javascript.html#sect_nature
console.log(3+4); //7

var foo; // declare variables

var y =10;
var x;
if (y >= 0) {
    x = y; 
} else {
    x = -y;
}

// expression
var x = y >= 0 ? y: -y;

// customFunction( y >=0? y: -y);

// Semicolons
var x = 3 * 7;
var f = function() {};

// Compund assignment Operators
x += 1; 
x = x + 1;


// return typeof
console.log(typeof true);
console.log(typeof 'hello cu');
console.log(typeof {});
console.log(typeof []);
console.log(typeof 123);
console.log(typeof function() {});
console.log(typeof undefined);
console.log(typeof null);


// Math
console.log(Math.abs(-2)); // 2
console.log(Math.pow(3,2)); // 3^2 = 9
console.log(Math.round(1.8)); // 2
console.log(Math.cos(Math.PI)); // -1 

// Other functions in Javascript
// Date
// JSON
// console.*







