
const add = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let display =document.getElementById("display");
    display.innerHTML =`The sum of ${num1} and ${num2} is ${parseInt(num1) + parseInt(num2)} `
};
const sub = () => {
    let num1 =document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let display = document.getElementById("display");
    display.innerHTML = `The difference of ${num1} and ${num2} is ${parseInt(num1) - parseInt(num2)}`;
} ;
const mul = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let display = document.getElementById("display");
    display.innerHTML = `The product of ${num1} and ${num2} is ${parseInt(num1) * parseInt(num2)}`;
}
const div = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let display = document.getElementById("display");
    display.innerHTML = `The division of ${num1} and ${num2} is ${parseInt(num1) / parseInt(num2)}`;
}