//for plus
function getIncreaseNum(elemId) {

    let input = document.getElementById(elemId);
    let value = input.value;
    let parseValue = parseInt(value);

    let newValue = parseValue += 1;
    input.value = newValue;

    return newValue;


}

//for minus
function getDecreaseNum(elemId) {

    let input = document.getElementById(elemId);
    let value = input.value;
    let parseValue = parseInt(value);

    let newValue = parseValue -= 1;
    input.value = newValue;

    return newValue

}

function updateCaseValue(elemId, value) {

    let productPrice = value * 59;

    document.getElementById(elemId).innerText = productPrice;

}

function updatePhoneValue(elemId, value) {

    let productPrice = value * 1219;

    document.getElementById(elemId).innerText = productPrice;

}


function subTotal() {

    let phonePrice = document.getElementById('phone-price');
    phoneText = phonePrice.innerText;
    phonePriceParse = parseInt(phoneText);

    let casePrice = document.getElementById('case-price');
    caseText = casePrice.innerText;
    casePriceParse = parseInt(caseText);

    let subTotal = phonePriceParse + casePriceParse;

    document.getElementById('sub-total').innerText = subTotal;

    //calculate tax
    let tax = (subTotal * 0.1).toFixed(2);
    let taxParse = parseFloat(tax);
    document.getElementById('tax').innerText = taxParse;


    //calculate total
    let total = taxParse + subTotal;
    document.getElementById('total').innerHTML = total;



}
