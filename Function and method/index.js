console.log("Hello World");

// function defination
// function functionName(){
//  do some work
// }



// function call
// functionName();



// tryout

function myFunciton(){
    console.log("I hate javaScript");
}

myFunciton();



function showMessage(msg){  //msg is  paremeter ->
    console.log(" ");
    console.log(msg)
}

showMessage("My name is Zani"); //argumrnt



function sumOfNumber(x,y){  //x and y is local variable
    console.log("Sum=" + x * y);
}

sumOfNumber(6,5)



function nameOfGame(){
    return "Elden ring";
}

let value = nameOfGame();
console.log(value);


// Arrow function

function sumofNum(a, b){
    return a+b;
}
function multiplicationOfNum(a,b){
    return a*b;
}

const sum = (a,b)=>{
    console.log(a+b);
}

console.log(sum);
sum(5,6);




const multiplication = (a,b)=>{
    console.log(a*b);
}

multiplication(6,5);



const notification = ()=>{
    console.log("Time to work");
}

notification();


// create a function using the function keyword that takes a streing as an argumrnt and return numbers of vowels in the string 

// create an arrow function to perform the same task.




const aString = "anime";
let count = 0;
function vowel(a){
    for(let i = 0; i<a.length; i++){
        if(a[i] == 'a' || a[i] == 'e'|| a[i]=='i' || a[i] == 'o' || a[i] == 'u'){
           count = count + 1;
        }
    }
    return count;
}

console.log(vowel(aString));


let Sum=0;
const checkVowel = (a)=>{
    for(let i = 0; i<a.length; i++){
        
        if(a[i] == 'a' || a[i] == 'e'|| a[i]=='i' || a[i] == 'o' || a[i] == 'u'){
           Sum = Sum + 1;
        }
    }
    return Sum;

}

console.log(checkVowel('amelia'));