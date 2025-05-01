console.log("Hello world");

const roll_no = document.getElementById("roll_no"); // fixed ID
const form = document.getElementById('form');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];

    if (email.value.trim() === "" || !email.value.includes('@')) {
        message.push("Invalid Email");
    }

    if (roll_no.value.trim() === "") {
        message.push("Invalid Roll No");
    }

    if (gender.value.trim() === "") {
        message.push("Please select a gender");
    }

    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(", ");
        error.style.color = "red";
    }
});
