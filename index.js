let inputNumber = document.getElementById("numberInfo");

let lengthResult = document.getElementById("lengthCal");
let volumeResult = document.getElementById("volumeCal");
let massResult = document.getElementById("massCal");

inputNumber.addEventListener("input", updateCalculation); /*trigger the function when the users enter a number*/

function updateCalculation(e){
    lengthResult.textContent = e.target.value; /*e.target.value is the value property of some DOM element, in this case that means the text entered in the search input.*/
    lengthCalculation(e);
    volumeCalculation(e);
    massCalculation(e);
}

function lengthCalculation(e){
    let inputLength = e.target.value; /*e.target.value is the value property of some DOM element, in this case that means the text entered in the search input.*/
    let feetConvert = inputLength * 3.281;
    feetConvert = feetConvert.toFixed(2); /*round the result by 2 digit numbers*/

    let meterConvert = inputLength / 3.281;
    meterConvert = meterConvert.toFixed(2); /*round the result by 2 digit numbers*/

    lengthResult.textContent = inputLength + " meters = " + feetConvert + " feet | " + inputLength + " feet = " + meterConvert + " meters";
}

function volumeCalculation(e){
    let inputLength = e.target.value; /*e.target.value is the value property of some DOM element, in this case that means the text entered in the search input.*/
    let gallonConvert = inputLength * 4.546;
    gallonConvert = gallonConvert.toFixed(2); /*round the result by 2 digit numbers*/

    let literConvert = inputLength / 4.546;
    literConvert = literConvert.toFixed(2); /*round the result by 2 digit numbers*/

    volumeResult.textContent = `${inputLength} liters = ${gallonConvert} gallons | ${inputLength} gallons = ${literConvert} liters`; /*Interpolation*/
}

function massCalculation(e){
    let inputLength = e.target.value; /*e.target.value is the value property of some DOM element, in this case that means the text entered in the search input.*/
    let kiloConvert = inputLength * 2.205;
    kiloConvert = kiloConvert.toFixed(2); /*round the result by 2 digit numbers*/

    let poundConvert = inputLength / 2.205;
    poundConvert = poundConvert.toFixed(2); /*round the result by 2 digit numbers*/

    massResult.textContent = `${inputLength} kilos = ${poundConvert} pounds | ${inputLength} pounds = ${kiloConvert} kilos`; /*Interpolation*/
}

