let btn1 = document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn was clicked");
    let a = 25;
    a++;
    console.log(a);
}


function showMessage(){
    document.getElementById('message').innerText = "Button was clicked";
}

const button = document.getElementById('myButton');
button.addEventListener('click',showMessage);



// event object 
// it is a sspecial object that has details about the event.


let div2 = document.querySelector(".click");




// EventListerners

div2.addEventListener("click", (evt)=> {
    console.log("Btn click was click");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
})


div2.addEventListener("click",()=>{
    console.log("handler 1");
})

div2.addEventListener("click",()=>{
    console.log("handler 2");
})


div2.addEventListener("click",()=>{
    console.log("handler 4");
})

const handler = () =>{
    console.log("handler 3")
}


btn1.addEventListener("click",handler);
btn1.removeEventListener("click",handler)




// create a toggle button that change the screen to dark mode when clicked and light mode when clicked again.

let modebtn = document.querySelector("#mode");
let currMode = "light";

modebtn.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
})