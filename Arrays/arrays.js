//xreate array 

let heroes = ["Ironman","hulk","spiderman","Ant man"];

let games = ["Elden ring","Wukong","Ghost of Tsusima","Dark soul"];

let marks = [87 , 99 , 88 , 77 , 22];

console.log(heroes);
console.log(heroes.length);

console.log(marks);
console.log(marks.length);

console.log(typeof marks);
console.log(typeof heroes);


console.log('1.' + heroes[0]);

heroes[0] = "Wonder women";
console.log(heroes);


for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
console.log(" ");

for(let el of games){
    console.log(el.toUpperCase());
}


// for a given array with marks of student ->
// [85,97,44,37,60]
// find the average marks of the entire class

let marksOfStudent = [85,97,44,37,60];
let sum=0;
for(let i = 0 ; i < marksOfStudent.length; i++){
    sum = sum + marksOfStudent[i];

}

let avg = sum/marksOfStudent.length;
console.log("the sum : ",sum);
console.log("The averag//e marks of student is : ", avg);


// for a given array with a prices of 5 items
//  [250,645,300,900,50]
// all the items have an offer of 10% OFF on them. change the array to store final price after applying offer.

let price = [250,645,300,900,50];
console.log(price);

for(let i = 0; i < price.length; i++){
    let temp = price[i]*0.10;
    price[i] = temp;
}

console.log(`price : ${price}`)

