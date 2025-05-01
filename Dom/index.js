// console.log("Js connected");



// // window objects
// // the window object represent an open winbdow in browser. it is browser object (not javascript) and automatically created by browser

// // it is a global object with lots of properties and methods

// console.log(window);
// window.console.log("hello");



// // DOM -> document object model 
// // When a web page is loaded, the browser creates a document object model of the page

// // console.log -> this only print 
// // console.dir -> it print document properties and methods

// console.dir(window);
// console.log(window.document.body);

// document.body.style.background ="blue";

// // DOM manipulation

// // access element by id
// // document.getElementById('myId')
// let head = document.getElementById('heading')
// console.dir(head);
// console.log(head);


// // access element by className
// // document.getElementsByClassName("myClass")
// let paragraph = document.getElementsByClassName("paragraph")
// console.dir(paragraph);
// console.log(paragraph);

// // access element by tag
// // document.getElementsByTagName("myTag");




// // auery selector
// // document.querySelector("myId/myclass/tags");
// // it return the first elements

// // document.querySelectorAll("myId/myClass/tag");
// // it return all elements 

// let element= document.querySelector("p");
// console.log(element);


// let el = document.querySelectorAll("p");
// console.log(el);

// // query selector with class
// let box = document.querySelector(".paragraph");
// console.log(" ");
// console.log(box);
// console.dir(box);



// // Dom Properties -> 
// // tagName->return tag for elements nodes
// element.tagName;


// // innerText->return the text of the content of the element and all its children
// let fruits = document.querySelector('ul');
// console.dir(fruits);
// console.log(fruits.innerText);
// // inner text return pure text


// // innerHtml->return the plain text or html contain in the element
// console.log(fruits.innerHTML);
// fruits.innerText = "abcd"; //->dynamic change
// fruits.innerHTML = "<i>ABCD</i>";
// // innerHtml return with tags 



// // textContent->return textual content even for hidden element
// let hiding = document.querySelectorAll('span')


// create a h2 heading element with text - hello javascript append from apna college student to this text using js.
let h2 = document.querySelector('h2');
console.dir(h2.innerText);
h2.innerText = h2.innerText +  " from apna college";
console.dir(h2.innerText)




