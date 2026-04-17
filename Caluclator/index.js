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