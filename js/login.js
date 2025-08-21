document.getElementById('btn-login').addEventListener('click', function(){
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '5' && pinNumber=== 1234 ){
        // console.log('You are welcome!!');
        window.location.href = '..//home.html';
    }
    else{
        alert('Wrong Number or pin')
    }
    console.log(phoneNumber, pinNumber)
})