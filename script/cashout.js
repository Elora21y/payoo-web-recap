// cashout
document.getElementById('cashout-box').addEventListener('click', function (event) {
    handleToggle('add-money', 'none')
    handleToggle('cashout', 'block')
    handleToggle('transfer', 'none')
    handleToggle('bonus', 'none')
    handleToggle('pay-bill', 'none')
    handleToggle('transaction', 'none');

})


document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const account = document.getElementById('cashout-accout').value;
    const amount = getInputById('cashout-amount');
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin)
    const balance = getInnerText('main-balance');
    const selectBank = document.getElementById('select').value;


    if (amount && pin && account && balance) {
        if (account.length === 11) {
            if (/^\d{4}$/.test(convertedPin)) {
                if (amount > 0 && amount < balance) {
                    const sub = balance - amount;
                    setInnerTextByIdAndValue('main-balance', sub)

                    const container = document.getElementById('transaction-container')
                    const div = document.createElement('div');

                    div.innerHTML = `
                    <img src="assets/send1.png" alt="" class="w-12 h-12 bg-base-300 rounded-full p-1 m-2">
                      <div> 
                      <h1 > Cash Out from ${selectBank} </h1>
                      <p class ="text-red-600"> TK. ${amount} </p>
                      <p> account number : ${account} </p>
                      </div>
                       `
                    div.classList.add('bg-white', 'p-2', 'rounded-md', 'shadow-md', 'm-2', 'flex', 'gap-4', 'items-center', 'space-y-1')
                    container.appendChild(div)
                    container.classList.add('hidden');

                    document.getElementById('view').addEventListener('click', function () {
                        container.classList.remove('hidden');
                    })

                }
                else {
                    alert(alert('you have not balanced'))
                }
            }
            else {
                alert('Invalid your pin')
            }
        }
        else {
            alert('Incorrect your account number')
        }
    }
    else {
        alert('Please fill all requirement')
    }

    // // ternary
    // account && amount && pin ?
    //     account.length === 11 ?
    //        /^\d{4}$/.test(convertedPin) ?
    //  amount > 0 && amount < balance ?
    //             setInnerTextByIdAndValue('main-balance', balance - amount) :
    //             alert('you have not balanced') : alert('Invalid your pin') :
    //         alert('Incorrect your account number') :
    //     alert('Please fill all requirement')
})