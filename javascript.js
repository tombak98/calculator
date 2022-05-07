// basic math functions

const add = function(a,b) {
    let num = a+b;
    let deci = num.toString().split(".");
    if (deci[1] && deci[1].length > 4) {
        return (a+b).toFixed(4);
    } else {
        return a+b;
    }
};

const subtract = function(a,b) {
    let num = a-b;
    let deci = num.toString().split(".");
    if (deci[1] && deci[1].length > 4) {
        return (a-b).toFixed(4);
    } else {
        return a-b;
    }
};

const multiply = function(a,b) {
    let num = a*b;
    let deci = num.toString().split(".");
    if (deci[1] && deci[1].length > 4) {
        return (a*b).toFixed(4);
    } else {
        return a*b;
    }
};

const divide = function(a,b) {
    if (b == 0) {
        alert("WARNING, NO DIVIDE BY 0. REFRESH PAGE PLEASE")
    } else {
        let num = a/b;
        let deci = num.toString().split(".");
        if (deci[1] && deci[1].length > 4) {
            return (a/b).toFixed(4);
        } else {
            return a/b;
        }
        
    }
};

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
        return subtract(a,b);
    } else if (operator == "*") {
        return multiply(a,b);
    } else if (operator == "/") {
        return divide(a,b);
    }
}

// // calc functionality
let firstNum = 0;
let secNum = 0;
let operator = "";
let stateA = 0;
let stateB = 0;

// when you press buttons, it shows in the readout properly
const readout = document.querySelector(".readout");
const result = document.querySelector(".result");

const clear = document.querySelector(".clear");
clear.addEventListener("click", function(e) {
    readout.textContent = "";
    result.textContent = "";
    firstNum = 0;
    secNum = 0;
    stateA = 0;
    stateB = 0;
});

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", function(e) {
    if (stateA == 0) {
        result.textContent += number.textContent;
    } else if (stateA == 1) {
        result.textContent = "";
        result.textContent += number.textContent;
        stateA = 0;
    } else if (stateA == 2) {
        readout.textContent = result.textContent;
        stateA = 0;
    }
}));

const deci = document.querySelector("#decimal");
deci.addEventListener("click", function(e) {
    let a = result.textContent.split("");
    if (a[a.length-1] == ".") {
        
    } else {
        if (stateA == 0) {
            result.textContent += deci.textContent;
        } else if (stateA == 1) {
            result.textContent = "";
            result.textContent += deci.textContent;
            stateA = 0;
        } else if (stateA == 2) {
            readout.textContent = result.textContent;
            stateA = 0;
        }
    }
});

// operators
const plus = document.querySelector("#plus");
plus.addEventListener("click", function(e){
    if (stateB < 1) {
        firstNum = parseFloat(result.textContent);
        readout.textContent = result.textContent + "+";
        stateA = 1;
        operator = "+";
        stateB += 1;
    } else {
        secNum = parseFloat(result.textContent);
        result.textContent = operate(operator,firstNum,secNum);
        readout.textContent = result.textContent + "+";
        firstNum = parseFloat(result.textContent);
        operator = "+";
        stateB += 1;
        stateA = 1;
    }
})

const mult = document.querySelector("#multiply");
mult.addEventListener("click", function(e){
    if (stateB < 1) {
        firstNum = parseFloat(result.textContent);
        readout.textContent = result.textContent + "*";
        stateA = 1;
        operator = "*";
        stateB += 1;
    } else {
        secNum = parseFloat(result.textContent);
        result.textContent = operate(operator,firstNum,secNum);
        readout.textContent = result.textContent + "*";
        firstNum = parseFloat(result.textContent);
        operator = "*";
        stateB += 1;
        stateA = 1;
    }
});

const divise = document.querySelector("#divide");
divise.addEventListener("click", function(e){
    if (stateB < 1) {
        firstNum = parseFloat(result.textContent);
        readout.textContent = result.textContent + "÷";
        stateA = 1;
        operator = "/";
        stateB += 1;
    } else {
        secNum = parseFloat(result.textContent);
        result.textContent = operate(operator,firstNum,secNum);
        readout.textContent = result.textContent + "÷";
        firstNum = parseFloat(result.textContent);
        operator = "/";
        stateB += 1;
        stateA = 1;
    }
});

const minus = document.querySelector("#minus");
minus.addEventListener("click", function(e){
    if (stateB < 1) {
        firstNum = parseFloat(result.textContent);
        readout.textContent = result.textContent + "-";
        stateA = 1;
        operator = "-";
        stateB += 1;
    } else {
        secNum = parseFloat(result.textContent);
        result.textContent = operate(operator,firstNum,secNum);
        readout.textContent = result.textContent + "-";
        firstNum = parseFloat(result.textContent);
        operator = "-";
        stateB += 1;
        stateA = 1;
    }
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", function(e) {
    secNum = parseFloat(result.textContent);
    readout.textContent += result.textContent + "=";
    result.textContent = operate(operator,firstNum,secNum);
    stateA = 2;
    stateB = 0;
})