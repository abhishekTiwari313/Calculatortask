let result = "0";

function updateResult() {
    document.getElementById("result").textContent = result;
}

function clearResult() {
    result = "0";
    updateResult();
}

function appendToResult(value) {
    if (result === "0" && value !== ".") {
        result = value;
    } else {
        result += value;
    }
    updateResult();
}

function calculateResult() {
    try {
        result = eval(result).toString();
        updateResult();
    } catch (error) {
        result = "Error";
        updateResult();
    }
}

updateResult();