var firstNumber = +prompt("Enter your First Number")
var operator = prompt("Choose any Operator")
var secondNumber = +prompt("Enter your Second Number")

if(operator === "+"){
    console.log("Addition :",firstNumber + secondNumber)
}else if(operator === "-"){
    console.log("Subtraction :",firstNumber - secondNumber)
}else if(operator === "*"){
    console.log("Multiplication :",firstNumber * secondNumber)
}else if(operator === "/"){
    console.log("Division :",firstNumber / secondNumber)
}else if(operator === "%"){
    console.log("Modulus :",firstNumber % secondNumber)
}else{
    console.log("Invalid Operator OR Number")
}