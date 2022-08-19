//access + button for phone
document.getElementById('phone-plus').addEventListener('click', function () {

    //input field for +
    let newValue = getIncreaseNum('input1');

    //phone value
    updatePhoneValue('phone-price', newValue);

    //subtotal
    subTotal();

});

//access - button for phone
document.getElementById('phone-minus').addEventListener('click', function () {

    //input field for -
    let newValue = getDecreaseNum('input1');
    //phonr value
    updatePhoneValue('phone-price', newValue);

    //subtotal
    subTotal();

    const btn = document.getElementById('phone-minus');
    const input = document.getElementById('input1');
    let value = input.value;
    console.log(value);

});


//access + button for case
document.getElementById('case-plus').addEventListener('click', function () {

    //input field for +
    let newValue = getIncreaseNum('input2');

    //case value
    updateCaseValue('case-price', newValue);

    //subtotal
    subTotal();
});

//access - button for case
document.getElementById('case-minus').addEventListener('click', function () {

    //input field for -
    let newValue = getDecreaseNum('input2');

    //case value
    updateCaseValue('case-price', newValue);

    //subtotal
    subTotal();

});