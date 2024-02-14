function add(num1,num2){
    return Number(num1)+Number(num2);
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return (num1/num2);
}
function operation(num1,operation,num2){
let sum;
switch(operation){
    case "+":
        sum=add(num1,num2);
        break;
    case "-":
        sum=subtract(num1,num2);
        break;
    case "*":
        sum=multiply(num1,num2);
        break;
    case "/":
        if(num2==0){
            return "Error";
        }
        sum=divide(num1,num2);
        break;
}
result=sum;
return sum;
}
let numbers=[0,0];
let result=0;
let counter=0;
let op="";
const display=document.querySelector("#display");
const buttons=document.querySelectorAll(".num");
const operations=document.querySelectorAll(".operation");
const equal=document.querySelector(".equals");
buttons.forEach((button)=>{
    button.addEventListener("click",(element)=>{
        numbers[counter]=display.textContent=element.target.getAttribute("id");
        counter++;
    })
})
operations.forEach((o)=>{
    o.addEventListener("click",(element)=>{
        op=display.textContent=element.target.getAttribute("id");
    })
})
equal.addEventListener("click",(element)=>{
    if(op=="/"){
        display.textContent="= "+(operation(numbers[0],op,numbers[1])).toFixed(3);
    }else{
        display.textContent="= "+(operation(numbers[0],op,numbers[1]));
    }
    counter=0;

});
const ans=document.querySelector(".ans");
ans.addEventListener("click",()=>{
    display.textContent=result;
    numbers[counter]=result;
    counter++;
})
const clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
    display.textContent="";
    counter=0;
})
