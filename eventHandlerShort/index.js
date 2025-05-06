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

div2.onclick = (e) =>{
    console.log(e);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX , event.clientY);
}


// EventListerners
