function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber; 
}

function calculate() {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    console.log(firstNumber, secondNumber);
    
    var operators = document.getElementById("operators");
    var operatorSelected = operators.options[operators.selectedIndex].value
    console.log(operators, operators.options, operatorSelected);

    var result;
    if(operatorSelected == "+")  {
        result = sum(Number(firstNumber), Number(secondNumber))

    } 
    
    if(operatorSelected == "-")  {
        result = subtract(Number(firstNumber), Number(secondNumber))

    }

    if(operatorSelected == "*")  {
        result = multiply(Number(firstNumber), Number(secondNumber))

    }

    if(operatorSelected == "/")  {
        result = divide(Number(firstNumber), Number(secondNumber))
    }
    //var result = sum(Number(firstNumber), Number(secondNumber));
    console.log(result);
    document.getElementById("result").textContent = "Result: " + result
    console.log("Cálculo bem sucedido! ");
}


 
