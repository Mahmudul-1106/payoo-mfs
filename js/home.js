document.getElementById('btn-add-money').addEventListener('click', function(){
    const addMoney = document.getElementById('amount-input').value;
    const pin = document.getElementById('pin-input').value;
    const finalAmount = document.getElementById('final-amount').innerText;
    console.log(Number(finalAmount) + Number(addMoney))
    if(pin === 1234){
        finalAmount = Number(finalAmount)+Number(addMoney)
    }
})