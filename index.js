"use strict"

// Getting DOM elements

const toggleBtn = document.querySelectorAll("input[type=radio]");
const container = document.querySelector(".container");
const toggleContainer = document.querySelector(".tw-toggle");
const keyboard = document.querySelector(".keyboard");
const screen = document.querySelector(".screen");
const para = document.querySelector("p");
const heading = document.querySelector("h3");
const span = document.querySelectorAll(".span");
const btn = document.querySelectorAll(".btn");
const dell =document.querySelector(".dell");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
let themeMode = localStorage.getItem("themeMode");
const prevOperand = document.querySelector(".prev-operand");
const currentOperand = document.querySelector(".current-operand");
const operator = document.querySelectorAll(".operator")
let operation;


// fist theme function 

const firstTheme = ()=>{
    
    container.classList.remove("second-theme-container");
    toggleContainer.classList.remove("second-theme-tw-toggle");
    keyboard.classList.remove("second-theme-keyboard");
    screen.classList.remove("second-theme-screen");
    para.classList.remove("second-theme-para");
    heading.classList.remove("second-theme-heading");
    reset.classList.remove("second-theme-reset");
    equal.classList.remove("second-theme-equal");
    dell.classList.remove("second-theme-dell")
    prevOperand.classList.remove("second-theme-prev-operand")
    currentOperand.classList.remove("second-theme-current-operand")
    span.forEach(element => {
        element.classList.remove("second-theme-span");
    });
    btn.forEach(element =>{
        element.classList.remove("second-theme-btn");
    })

    operator.forEach(element => {
        element.classList.remove("second-theme-operator")
    })

    container.classList.remove("third-theme-container");
    toggleContainer.classList.remove("third-theme-tw-toggle");
    keyboard.classList.remove("third-theme-keyboard");
    screen.classList.remove("third-theme-screen");
    para.classList.remove("third-theme-para");
    heading.classList.remove("third-theme-heading");
    reset.classList.remove("third-theme-reset");
    equal.classList.remove("third-theme-equal");
    dell.classList.remove("third-theme-dell");
    prevOperand.classList.remove("third-theme-prev-operand")
    currentOperand.classList.remove("third-theme-current-operand")
    span.forEach(element => {
        element.classList.remove("third-theme-span");
    });
    btn.forEach(element =>{
        element.classList.remove("third-theme-btn");
    })
    operator.forEach(element => {
        element.classList.remove("third-theme-operator")
    })

  themeMode = localStorage.setItem("themeMode", "firstTheme")

}

// second them function

const secondTheme = ()=>{
    container.classList.add("second-theme-container");
    toggleContainer.classList.add("second-theme-tw-toggle");
    keyboard.classList.add("second-theme-keyboard");
    screen.classList.add("second-theme-screen");
    para.classList.add("second-theme-para");
    heading.classList.add("second-theme-heading");
    reset.classList.add("second-theme-reset");
    equal.classList.add("second-theme-equal");
    dell.classList.add("second-theme-dell")
    prevOperand.classList.add("second-theme-prev-operand")
    currentOperand.classList.add("second-theme-current-operand")
    span.forEach(element => {
        element.classList.toggle("second-theme-span");
    });
    operator.forEach(element => {
        element.classList.add("second-theme-operator")
    })
    btn.forEach(element =>{
        element.classList.add("second-theme-btn");
    })

    container.classList.remove("third-theme-container");
    toggleContainer.classList.remove("third-theme-tw-toggle");
    keyboard.classList.remove("third-theme-keyboard");
    screen.classList.remove("third-theme-screen");
    para.classList.remove("third-theme-para");
    heading.classList.remove("third-theme-heading");
    reset.classList.remove("third-theme-reset");
    equal.classList.remove("third-theme-equal");
    dell.classList.remove("third-theme-dell");
    prevOperand.classList.remove("third-theme-prev-operand")
    currentOperand.classList.remove("third-theme-current-operand")
    span.forEach(element => {
        element.classList.remove("third-theme-span");
    });
    btn.forEach(element =>{
        element.classList.remove("third-theme-btn");
    })

    operator.forEach(element => {
        element.classList.remove("third-theme-operator")
    })

    themeMode = localStorage.setItem("themeMode", "secondTheme")
    
}

// third them function

const thirdTheme = ()=>{
    container.classList.add("third-theme-container");
    toggleContainer.classList.add("third-theme-tw-toggle");
    keyboard.classList.add("third-theme-keyboard");
    screen.classList.add("third-theme-screen");
    para.classList.add("third-theme-para");
    heading.classList.add("third-theme-heading");
    reset.classList.add("third-theme-reset");
    equal.classList.add("third-theme-equal");
    dell.classList.add("third-theme-dell");
    prevOperand.classList.add("third-theme-prev-operand")
    currentOperand.classList.add("third-theme-current-operand")
    operator.forEach(element => {
        element.classList.add("third-theme-operator")
    })
    span.forEach(element => {
        element.classList.add("third-theme-span");
    });
    btn.forEach(element =>{
        element.classList.add("third-theme-btn");
    })

    

    container.classList.remove("second-theme-container");
    toggleContainer.classList.remove("second-theme-tw-toggle");
    keyboard.classList.remove("second-theme-keyboard");
    screen.classList.remove("second-theme-screen");
    para.classList.remove("second-theme-para");
    heading.classList.remove("second-theme-heading");
    reset.classList.remove("second-theme-reset");
    equal.classList.remove("second-theme-equal");
    dell.classList.remove("second-theme-dell")
    prevOperand.classList.remove("second-theme-prev-operand")
    currentOperand.classList.remove("second-theme-current-operand")
    span.forEach(element => {
        element.classList.remove("second-theme-span");
    });
    btn.forEach(element =>{
        element.classList.remove("second-theme-btn");
    })

    operator.forEach(element => {
        element.classList.remove("second-theme-operator")
    })

    themeMode = localStorage.setItem("themeMode", "thirdTheme")
}

// selecting the theme as per perference of client

if(themeMode === "thirdTheme"){
    thirdTheme()
    toggleBtn[2].checked = true;
} else if(themeMode === "secondTheme"){
    secondTheme()
    toggleBtn[1].checked = true;
} else {
    
    firstTheme()
    
}


// toggle button event listener

toggleBtn.forEach(element =>{
    element.addEventListener("change", ()=>{
        if(element.value === "false"){
            firstTheme()
        } else if(element.value === "-1"){
            secondTheme()
        } else {
            thirdTheme()
        }
    })
})


// Calculator event listeners

btn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        display(btn.innerHTML)
    })
})

operator.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(currentOperand.innerHTML === "") return;
        if(prevOperand.innerHTML !== "") calculator();
        operation = btn.innerHTML;
        display(btn.innerHTML)
        updateDisplay()
        
        
    })
})

equal.addEventListener("click", ()=>{
    calculator()
})

reset.addEventListener("click", ()=>{
    clear()
})

dell.addEventListener("click", ()=>{
    deleteElement()
})


// calculator functions

function display(n){
    if(currentOperand.innerHTML === '.' && currentOperand.innerHTML === includes(".")) return;
  currentOperand.innerHTML = currentOperand.innerHTML.toString() + n.toString();
}
  

function updateDisplay (){
    prevOperand.innerHTML = currentOperand.innerHTML
    currentOperand.innerHTML = '';
}

function clear(){
    prevOperand.innerHTML ="";
    currentOperand.innerHTML = "";
}

function deleteElement(){
    if(currentOperand.innerHTML.length === 1) currentOperand.innerHTML = '';
   currentOperand.innerHTML = currentOperand.innerHTML.toString().slice(-1)
}


function calculator(){

    let result;
    let prev = parseFloat(prevOperand.innerHTML);
    let current = parseFloat(currentOperand.innerHTML);
    if(isNaN(prev) || isNaN(current)) return;

    switch(operation){
        case "+":
            result = prev + current;
            break;

        case "-":
            result = prev - current 
            break;

        case "*":
            result = prev * current; 
            break; 

        case "/":
            result = prev / current;
            break;

        default: 
            return;
    } 
    currentOperand.innerHTML = result;
    operation = undefined;
    prevOperand.innerHTML = "";
    

}




        




