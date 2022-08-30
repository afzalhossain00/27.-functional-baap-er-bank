// document.getElementById('btn-deposit').addEventListener('click', function () {
//     /*
//     1. get the element by id
//     2. get the value from the element
//     3. convert string value to a number
//     */
//     const newDepositAmount = getInputFieldValueById('deposit-field')
//     /*
//     1. get previous total by id
//     */
//     const previousDepositTotal = getElementValueById('deposit-total');

//     // calculate new deposit total
//     const newDepositTotal = previousDepositTotal + newDepositAmount;
//     // set deposit total value
//     setElementValueById('deposit-total', newDepositTotal);

//     // get previous balance by using the function
//     const previousBalanceTotal = getElementValueById('balance-total');
//     const newBalanceTotal = previousBalanceTotal + newDepositAmount;

//     setElementValueById('balance-total', newBalanceTotal);

// });






// Self - Practice
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getInputElementValueById('deposit-total');
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    setElementValueById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getInputElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementValueById('balance-total', newBalanceTotal);
});