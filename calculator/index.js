const  display=document.querySelector(".inp")
const btn=document.querySelector(".symbol")
function  one(){
    display.value += '1'
}
function two(){
    display.value +='2'
}
function three(){
    display.value += '3'
}
function four(){
    display.value += '4'
}
function five(){
    display.value += '5'
}
function six(){
    display.value += '6'
}
function seven(){
    display.value += '7'
}
function eight(){
    display.value += '8'
}
function nine(){
    display.value +='9'
}
function zero(){
    display.value += '0'
}
function operator(input){
    display.value += input
}
function dot(){
    display.value += '.'
}
function ac(){
    display.value =''
}
const del=()=>{
    display.value = display.value.substring(0,display.value.length-1)
}