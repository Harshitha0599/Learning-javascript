
const add = () => {
    event.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2");
    let display =document.getElementById("display");
    display.innerHTML =`The sum of ${num1} and ${num2.value} is ${parseInt(num1) + parseInt(num2.value)} `
};
const sub = () => {
    event.preventDefault();
    let num1 =document.getElementById("num1").value;
    let num2 = document.getElementById("num2");
    let display = document.getElementById("display");
    display.innerHTML = `The difference of ${num1} and ${num2.value} is ${parseInt(num1) - parseInt(num2.value)}`;
} ;
const mul = () => {
    event.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2");
    let display = document.getElementById("display");
    display.innerHTML = `The product of ${num1} and ${num2.value} is ${parseInt(num1) * parseInt(num2.value)}`;
};
const div = () => {
    event.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2");
    let display = document.getElementById("display");
    display.innerHTML = `The division of ${num1} and ${num2.value} is ${parseInt(num1) / parseInt(num2.value)}`;
};