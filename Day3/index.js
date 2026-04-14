
const obj={
    id:1,
    name:"harshitha",

    ar:["hello",102,null,true,8.237]
}
console.log(obj.loc);

obj.loc="hyderabad"

console.log(obj);

console.log(obj.ar);


const user=[
    {
        id:1,
        name:"harshitha",
        loc:"hyderabad"
    },
    {
        id:2,
        name:"yathika",
        loc:"hyderabad"
    }
]
//console.log(user);
//console.log(user[0].name);
//console.log(user[0]);
//for in-objects
for (const key in user) {
    if (!Object.hasOwn(user, key)) continue;
    
    const element = user[key]; 
    console.log(element); 
}

//for of-arrays
for (const element of user) {
    console.log(element);
}


function myFun(){
    //console.log("hello");
    return 20;
}
//myFun();
//console.log(myFun());
console.log(myFun);

function add(a,b){
    return a+b;
}
console.log(add(100,200));

const myFun1=function(n1,n2){
    return n1+n2;
}
console.log(myFun1(46,22));

//calculator
/*const a=25;
const b=15;
const operator = ("Enter operator (+, -, *, /):");

switch (operator) {
    case "+":function add(a,b){
        return a+b;
    }
        break;
    case "-":function sub(a,b){
        return a-b;
    }
        break;
    case "*":function mul(a,b){
        return a*b;
    }   
        break;
    case "/":function div(a,b){
        return a/b;
    }
        break;      
    default:
        break;  
}*/

function calculator(a,b,operator){
    switch (operator) {
        case "+":
            console.log("addition of "+a+" and "+b +" is "+(a+b));
            //return a+b;
            break;
        case "-":
            console.log("subtraction of "+a+" and "+b +" is "+(a-b));
            //return a-b;
            break;      
        case "*":
            console.log("multiplication of "+a+" and "+b +" is "+(a*b));
            //return a*b;
            break;

        case "/":
            console.log("division of "+a+" and "+b +" is "+(a/b));
            //return a/b;
            break;
        default:
            return "invalid operator";
            break;  
    }   
}
calculator(25,15,"+");
//console.log( calculator(25,15,"-"));


let name = "yathika";
let age = 5;

console.log("My ..name is " + name + " and my age is " + age);

console.log(`My ..name is ${name} and my age is ${age}`);