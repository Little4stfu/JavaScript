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



let souls = "Eldenring".toUpperCase();

console.log(souls);


// foreach function

let arr = [1,2,3,4,5];

arr.forEach(function myArray(val){
    console.log(val)
})

let cities = ["Warsaw","Plock","Tokyo"]
cities.forEach((val,idx,cities)=>{
    console.log(val.toUpperCase(),idx,cities);
})



// higher order method or function
// they take other funciton as a paramenter or it return function as value 



console.log("square ,Index, Array");
let toSquare = [1,2,3,4,5,6];

toSquare.forEach((val,idx,toSquare)=>{
    console.log(val * 2,idx,toSquare);
})


// Array method 

// map method
// map create a new array with the result of some operation the value its callback return are used to from a new array


let numbers = [4,5,6,7,8,4]

numbers.map((val)=>{
    console.log(val)
})

console.log(" ");



let newArray = numbers.map((val)=>{
    console.log(val)
})

console.log(newArray);



// filter method 

let num  = [,4,5,6,7,9,2,3,];

let newNum = num.filter((val)=>{
    return val %2 != 0;
})
console.log(newNum);

