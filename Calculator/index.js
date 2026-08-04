const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");
const resultDisplay = document.getElementById("result-display");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const divideBtn = document.getElementById("divide-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const calculationMessage = document.getElementById("calculation-message");

function updateResult() {
    const firstNum = parseFloat(firstNumberInput.value);
    const secondNum = parseFloat(secondNumberInput.value);
    
    if (isNaN(firstNum) || isNaN(secondNum)) {
        resultDisplay.textContent = "= 0";
        return;
    }
}

function showMessage(message) {
    calculationMessage.textContent = message;
    calculationMessage.classList.add("show");
    setTimeout(function () {
        calculationMessage.classList.remove("show");
    }, 2000);
}

addBtn.addEventListener("click", function () {
    const firstNum = parseFloat(firstNumberInput.value);
    const secondNum = parseFloat(secondNumberInput.value);
    
    if (isNaN(firstNum) || isNaN(secondNum)) {
        showMessage("⚠ Please enter both numbers");
        return;
    }
    
    const result = firstNum + secondNum;
    resultDisplay.textContent = "= " + result;
    showMessage("✓ Addition: " + firstNum + " + " + secondNum + " = " + result);
});

subtractBtn.addEventListener("click", function () {
    const firstNum = parseFloat(firstNumberInput.value);
    const secondNum = parseFloat(secondNumberInput.value);
    
    if (isNaN(firstNum) || isNaN(secondNum)) {
        showMessage("⚠ Please enter both numbers");
        return;
    }
    
    const result = firstNum - secondNum;
    resultDisplay.textContent = "= " + result;
    showMessage("✓ Subtraction: " + firstNum + " - " + secondNum + " = " + result);
});

divideBtn.addEventListener("click", function () {
    const firstNum = parseFloat(firstNumberInput.value);
    const secondNum = parseFloat(secondNumberInput.value);
    
    if (isNaN(firstNum) || isNaN(secondNum)) {
        showMessage("⚠ Please enter both numbers");
        return;
    }
    
    if (secondNum === 0) {
        showMessage("⚠ Cannot divide by zero");
        return;
    }
    
    const result = firstNum / secondNum;
    resultDisplay.textContent = "= " + result.toFixed(2);
    showMessage("✓ Division: " + firstNum + " ÷ " + secondNum + " = " + result.toFixed(2));
});

multiplyBtn.addEventListener("click", function () {
    const firstNum = parseFloat(firstNumberInput.value);
    const secondNum = parseFloat(secondNumberInput.value);
    
    if (isNaN(firstNum) || isNaN(secondNum)) {
        showMessage("⚠ Please enter both numbers");
        return;
    }
    
    const result = firstNum * secondNum;
    resultDisplay.textContent = "= " + result;
    showMessage("✓ Multiplication: " + firstNum + " × " + secondNum + " = " + result);
});

firstNumberInput.addEventListener("input", updateResult);
secondNumberInput.addEventListener("input", updateResult);
