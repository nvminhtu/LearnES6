// Source: http://cwbuecheler.com/web/tutorials/2013/javascript-callbacks/
// 1. change document innerHTML in javascript
// document.getElementById('output').innerHTML += ('starting ...');
// document.getElementById('output').innerHTML += ('continuing ...');
// document.getElementById('output').innerHTML += ('ending!');

// 2. JavaScript has a function for delayed execution of commands.
// You give it a command to run, 
// And then, the number of milliseconds to wait before
document.getElementById('output').innerHTML += ('starting ...');
var myTimer = window.setTimeout(function() {
    document.getElementById('output').innerHTML += ('ending!');
}, 500);
document.getElementById('output').innerHTML += ('continuing ...');
