// Insert Javascript Here
console.log("JS Linked")

// DOM SELECTOR //
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const input = document.getElementById('inputNum')
const number = document.querySelector(".number")

// EVENTLISTENERS //
plus.addEventListener('click', addition)
minus.addEventListener('click', subtract)

// GLOBAL VARIABLES //
let total = 0

// PLUS FUNCTION //
function addition(){
    let inputNum1 = parseInt(input.value)
    console.log(inputNum1)
    total = total + inputNum1
    number.innerText = total
    if (input.value < 0){
        input.style.color = "#FF0000"
    }
    else {
        input.style.color = "#000000"
    }
    if (parseInt(number.innerText) < 0){
        number.style.color = "#FF0000"
    }
    else {
        input.style.color = "#000000"
    }
}


// MINUS FUNCTION //
function subtract(){
    let inputNum2 = parseInt(input.value)
    console.log(inputNum2)
    total = total - inputNum2
    number.innerText = total
    if (input.value < 0){
        input.style.color = "#FF0000"
    }
    else {
        input.style.color = "#000000"
    }
    if (parseInt(number.innerText) < 0){
        number.style.color = "#FF0000"
    }
    else {
        input.style.color = "#000000"
    }
    // return number.innerText
}