function MyFunction() {
    let x = document.getElementById("Numb").value;
    let validationMessage = document.getElementById("demo");

    if (isNaN(x) || x < 1 || x > 10) {
        validationMessage.textContent = "Input not valid";
        validationMessage.className = "validation-message show invalid";
    } else {
        validationMessage.textContent = "Input OK";
        validationMessage.className = "validation-message show valid";
    }
}   