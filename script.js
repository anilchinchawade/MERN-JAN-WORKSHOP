
//Normal function
function add(a,b) {
    return a+b    
}

let result = add(20, 45)
console.log(`Result is ${result}`);

//Arrow function
const add1 = (x, y) =>  x+y

console.log(`Addition is: ${add1(30, 60)}`);


//Arrow function
const add2 = (x, y) =>  {
    return x+y
}

console.log(`Addition is: ${add2(50, 60)}`);


