
//Events

/*const myFun = () => {
    //console.log("hello");
    let display = document.getElementById("display");
    display.innerHTML = display.innerHTML === "Hello" ? "Bye" : "Hello";  
    display.style.color = display.style.color === "red" ? "blue" : "red";
    //display.style.color = display.style.color === "blue" ? "red" : "blue";
};*/

const myFun = () => {
    let myImg = document.getElementById("myImage");
    myImg.src = myImg.src === "https://tse1.mm.bing.net/th/id/OIP.UR0dlxc4kTpPz2EbHf03VAHaE8?pid=Api&P=0&h=180" ? "https://tse1.mm.bing.net/th/id/OIP.ctciPb5hqGg8gEKmIkwKlAHaEP?pid=Api&P=0&h=180" : "https://tse1.mm.bing.net/th/id/OIP.UR0dlxc4kTpPz2EbHf03VAHaE8?pid=Api&P=0&h=180";
};
