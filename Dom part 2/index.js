let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);


let name = div.getAttribute("name");
console.log(name);


let paraa = document.querySelector("p");

console.log(paraa.setAttribute("class","newClass"));


console.log(div.style);
div.style.backgroundColor = "red";
div.style.fontSize = "26px"
div.innerText = "Hello";
// div.style.visibility = "hidden";

let newBtn = document.createElement("button");

console.log(newBtn);