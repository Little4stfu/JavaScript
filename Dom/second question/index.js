console.log("Hello");


let box = document.querySelectorAll('.box');

console.log(box);

for(let i = 0; i<3;i++){
    box[i].innerText = "box no="+i;
}