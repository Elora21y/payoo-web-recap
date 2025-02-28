document.getElementById('btn-login').addEventListener('click' , function(event){
    event.preventDefault();
    const account = document.getElementById('account-number').value;
    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin)
    

    if(account && pin){
        if(account.length === 11){
            if(/^\d{4}$/.test(convertedPin)){
                console.log('yess')
                window.location.href = 'main.html'
            }
            else{
                alert('Invalid your pin')
            }
        }
        else{
            alert('Incorrect your account number')
        }
    }
    else{
        alert('Fill all requirement')
    }

    // ternary operator
    // account && pin ?  account.length === 11 ? convertedPin === 1234 ? window.location.href = 'main.html' : alert('Invalid your pin'):alert('Incorrect your account number'): alert('incorrect')

})