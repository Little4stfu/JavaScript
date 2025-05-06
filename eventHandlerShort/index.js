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



