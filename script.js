const display=document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value="";
}
function calculate() {
    try {
        const expression = display.value;
        const result = new Function(`'use strict'; return (${expression})`)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}