
const login = (event) => {
    event.preventDefault();
    //const username = document. getElementById("username");
    //const password = document.getElementById("password");
    //let display = document.getElementsByClassName("display");
    let us = event.target.username.value;
    let ps = event.target.password.value;
    let display = document.getElementById("message");
    if (us === "" && ps === "") {
        display.style.color = "red";
        display.innerText = "please enter details ,can't be empty"
        
    }else if (us === "") {
        display.style.color = "red";
        display.innerText = "please enter username"
    }else if (ps === "") {
        display.style.color = "red";

        display.innerText = "please enter password"
    }
    else {
        display.style.color = "green";
        display.innerText = "login successful"
    }

}

function showPassword() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}; 