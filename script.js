function CheckNumber() {
    let result = document.getElementById("validimi");
    let emailInput = document.getElementById("inputi").value;
    if (/^\+383\s\d{2}\s\d{3}\s\d{3}$/.test(emailInput)) {
        result.innerHTML = "Number is valid";
        result.style.color = 'green';
    }
    else {
        result.innerHTML = "Number is invalid";
        result.style.color = 'red';
    }
    //^ -  tregon me qka duhet me fillu
    // @ - dmth it's a must
}