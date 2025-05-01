console.log("Js connected");



// window objects
// the window object represent an open winbdow in browser. it is browser object (not javascript) and automatically created by browser

// it is a global object with lots of properties and methods

console.log(window);
window.console.log("hello");



// DOM -> document object model 
// When a web page is loaded, the browser creates a document object model of the page

// console.log -> this only print 
// console.dir -> it print document properties and methods

console.dir(window);
console.log(window.document.body);

document.body.style.background ="blue";

// DOM manipulation

// access element by id
// document.getElementById('myId')

// access element by className
// document.getElementByClassName("myClass")

// access element by tag
// document.getElementByTagName("myTag");
