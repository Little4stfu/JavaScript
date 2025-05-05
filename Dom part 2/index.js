// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);


// let name = div.getAttribute("name");
// console.log(name);


// let paraa = document.querySelector("p");

// console.log(paraa.setAttribute("class","newClass"));


// console.log(div.style);
// div.style.backgroundColor = "red";
// div.style.fontSize = "26px"
// div.innerText = "Hello";
// // div.style.visibility = "hidden";

// let newBtn = document.createElement("button");

// console.log(newBtn);
// newBtn.innerHTML = "Click me!";

// div.append(newBtn);

// let h1 = document.createElement("h1");
// h1.innerText = "This is h1";

// let body = document.querySelector("body");

// body.prepend(h1);



// div.remove();





// create a new button element. Give it a text "click me", Background color of red And text color of white/

// insert a button as thefirst element inside the body tag.

let newBtn = document.createElement("button");
console.log(newBtn);

let body = document.querySelector("body");

newBtn.innerHTML = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white"
newBtn.style.paddingTop = "5px";
newBtn.style.paddingDown = "5px";
newBtn.style.paddingLeft = "10px";
newBtn.style.paddingRight = "10px";

body.prepend(newBtn)


// create a p tag in html give it a class and some styling. now create a new class in css and try to apend this class to p element 
// did you notice how you overwrite the class name when you add a new one 
// solve this problem using classlist

let p = document.querySelector("p");

p.setAttribute("class", "oldClass");


let pr = document.createElement("p");

pr.setAttribute("class","newClass");
pr.innerHTML = "This is new class";


console.log(pr)


body.append(pr);


