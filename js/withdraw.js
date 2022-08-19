
document.getElementById("btn-withdraw").addEventListener("click", function () {

    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    withdrawField.value = '';

    if (isNaN(withdrawAmount)) {
        alert("Please provite an amount ")
        return;
    }

    const previousWithdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = previousWithdrawTotal.innerText;
    const withdrawTotal = parseFloat(previousWithdrawTotalString);

    if (withdrawAmount > withdrawTotal) {
        alert("Tor baper eto tk nai")
        return;
    }
    const curentWithdrawAmount = withdrawAmount + withdrawTotal;
    previousWithdrawTotal.innerText = curentWithdrawAmount;


    const previousTotalAmount = document.getElementById("total-balance");
    const previousTotalAmountString = previousTotalAmount.innerText;
    const previousTotalAmountNumber = parseFloat(previousTotalAmountString);

    const currentTotalAmount = previousTotalAmountNumber - curentWithdrawAmount;
    previousTotalAmount.innerText = currentTotalAmount;


})