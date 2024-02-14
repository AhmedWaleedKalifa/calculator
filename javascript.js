//calculator simple functions
function add(num1, num2) {
    return num1+ num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return (num1 / num2);
}

function operation(num1 = "", operation, num2) {
    let sum;
    num1=Number(num1);
    num2=Number(num2);
    switch (operation) {
        case "+":
            sum = add(num1, num2);
            break;
        case "-":
            sum = subtract(num1, num2);
            break;
        case "*":
            sum = multiply(num1, num2);
            break;
        case "/":
            sum = divide(num1, num2);
            break;
    }
    result = sum;
    return sum;
}
let numbers = ["", ""];
let result="";
let counter = 0;
let op = "";
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equals");
buttons.forEach((button) => {
    button.addEventListener("click", (element) => {
        const lastElement = display.textContent.at(-1);
        if (lastElement == "+" | lastElement == "-" | lastElement == "/" | lastElement == "*") {
            display.textContent = "";
            counter++;
        } else if (display.textContent.at(0) == "=") {
            display.textContent = "";
        }
        display.textContent = display.textContent + element.target.getAttribute("id");
        numbers[counter] += element.target.getAttribute("id");
    })
})
operations.forEach((o) => {
    o.addEventListener("click", (element) => {
        if(display.textContent.at(0)=="*"|display.textContent=="+"|display.textContent=="-"|display.textContent=="/"){
            display.textContent="Error";
        }else if(numbers[0]==""&&result==""){
            display.textContent="Error";
        }else{
            op = display.textContent = element.target.getAttribute("id");
        }
    });
})
equal.addEventListener("click",(element)=>{
    
    if(numbers[0]!=""){
        result=(operation(numbers[0],op,numbers[1]));
        if(op=="/"){
            if(numbers[1]==0){
                display.textContent="Error";
            }else{
                display.textContent="= "+result.toFixed(3);
            }
        }else{
            display.textContent="= "+result;
        }
    }else{
        console.log(result);
        display.textContent="= "+(operation(result,op,numbers[1]));
    }
    counter=0;
    numbers[0]="";
    numbers[1]="";

});
//const ans = document.querySelector(".ans");
// ans.addEventListener("click",()=>{
//     display.textContent=result;
//     numbers[counter]=result;
//     counter++;
// })
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    counter = 0;
    numbers[0] = "";
    numbers[1] = "";
    result = 0;
})
