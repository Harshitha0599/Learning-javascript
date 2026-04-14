
//Dom in js

/*let x = document.getElementById("id1");

console.log(x);
console.log(x.innerText);


x.innerText = "dom in js";

x.innerHTML = "<b>DOM IN JS</b>";*/

let y = document.getElementsByClassName("class1"); 

console.log(y);

let z = document.getElementsByClassName("class2");

let a = document.getElementsByClassName("class3");

console.log(z);
console.log(a);

z[0].innerHTML = "<b>hello</b>";

y[0].innerHTML = "<b>Dom in js</b>";

a[2].innerHTML = "<b>box 3</b>";

a[1].innerHTML = "<b>box 2</b>";


