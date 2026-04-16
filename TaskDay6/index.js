
//Arrays,concat,DOM,Event,Functions,
let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
function changeColor() {
    let display = document.getElementById("display");
    //display.style.backgroundColor = "red";
    
    let c = "#";
    for (let i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * 16);
        c += color[x];
    }
    display.style.backgroundColor = c;
}
changeColor();