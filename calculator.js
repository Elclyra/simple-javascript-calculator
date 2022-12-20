
let numberArea = document.getElementById("numberArea");
let lastNumber;
let firstNumber;
let secondNumber;
let lastSign;
let numbers;
let isCalculationOver = false;
let total = "";
let string = "";
let activeNumber;
let pi = document.getElementById("pi");
pi.value = Math.PI.toFixed(2);

document.querySelectorAll('[data-number]').forEach(item => {
    item.addEventListener("click", AddNumber, false);
})

document.querySelectorAll('[data-sign]').forEach(item => {
    item.addEventListener("click", AddNumber, false);
})

document.querySelectorAll('[data-equals]').forEach(item => {
    item.addEventListener("click", Calculate, false);
})

document.querySelectorAll('[data-clear]').forEach(item => {
    item.addEventListener("click", Clear, false);
})

function AddNumber() {
    isCalculationOver = false;
    if (!isCalculationOver) {
        activeNumber = document.querySelector("button:hover");
        lastNumber = activeNumber.value;
        let isLastSign;
        if (string.slice(-1) == "+" || string.slice(-1) == "-" || string.slice(-1) == "*" || string.slice(-1) == "/") {
            isLastSign = true;
            lastSign = string.slice(-1);
            firstNumber = string.slice(0, string.length - 1);
            numberArea.innerHTML = "";
            string = "";
        }
        if (!isLastSign || lastNumber >= 0 && lastNumber <= 9) {
            string += String(activeNumber.value);
            numberArea.innerHTML += activeNumber.value;

        }
        if (firstNumber != "") {
            secondNumber = string.slice(0, string.length);
        }
        if (total != "") {
            numberArea.innerHTML = lastNumber;
            total = "";
        }
    }
}

function Clear() {
    numberArea.innerHTML = "";
    string = "";
    lastSign = "";
    firstNumber = "";
    secondNumber = "";
    isLastSign = false;
}

function Calculate() {
    if (lastSign == "+") {
        total = parseFloat(firstNumber) + parseFloat(secondNumber);
        numberArea.innerHTML = total.toFixed(2);
    } else if (lastSign == "-") {
        total = parseFloat(firstNumber) - parseFloat(secondNumber);
        numberArea.innerHTML = total.toFixed(2);
    } else if (lastSign == "*") {
        total = parseFloat(firstNumber) * parseFloat(secondNumber);
        numberArea.innerHTML = total.toFixed(2);
    } else if (lastSign == "/") {
        total = parseFloat(firstNumber) / parseFloat(secondNumber);
        numberArea.innerHTML = total.toFixed(2);
    }


    isCalculationOver = true;
    firstNumber = "";
    lastSign = "";
    string = "";
    secondNumber = "";
    isLastSign = false;

}
