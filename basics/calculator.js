
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");


let op = prompt("chose an operation / * + -");



switch(op)
{
case '+':
console.log("a+b="+a+b)
case '-':
console.log("a-b="+a-b)
case '*':
console.log("a*b="+a*b)
case '/':
console.log("a/b="+(a/b).toFixed(2))
default:
console.log("error")


}

