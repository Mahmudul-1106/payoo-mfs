document.getElementById('btn-add-money').addEventListener('click', function () {
const pin = document.getElementById('pin-input').value;
const addMoney = document.getElementById('amount-input').value;
        
        const finalAmount = document.getElementById('final-amount').innerText;
    if (pin === '1234') {
        
        const finalAmountNew = Number(finalAmount) + Number(addMoney)
        document.getElementById('final-amount').innerText = finalAmountNew;

    }
    else{
        alert('Wrong pin')
    }
})