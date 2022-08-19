// step 1 add evenlistner in button

document.getElementById("btn-deposit").addEventListener("click", function () {
    // step 2 deposit amount ta input field theke nibo 
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert("Please provite an amount ")
        return;
    }



    // step 3 deposit total amount nibo and parseFloat korbo
    const previousDepositTotal = document.getElementById("deposit-total");
    const previousDepositAmountString = previousDepositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    // step 4 add the new deposit amount and previous deposit amount
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    previousDepositTotal.innerText = currentDepositAmount;

    // step 5 deposit  amount add on total balance
    const previousTotalAmount = document.getElementById("total-balance");
    const previousTotalAmountString = previousTotalAmount.innerText;
    const previousTotalAmountNumber = parseFloat(previousTotalAmountString);

    // step 6 sum of balance and deposit 
    const currentTotalAmount = previousTotalAmountNumber + newDepositAmount;
    previousTotalAmount.innerText = currentTotalAmount;


})