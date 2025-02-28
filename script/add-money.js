// add money
document.getElementById('add-money-box').addEventListener('click', function (event) {
    handleToggle('add-money', 'block')
    handleToggle('cashout', 'none')
    handleToggle('transfer', 'none')
    handleToggle('bonus', 'none')
    handleToggle('pay-bill', 'none')
    handleToggle('transaction', 'none');

})

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputById("amount");
    const pin = getInputById("pin-number");
    const account = document.getElementById('account-number').value;
    const balance = getInnerText('main-balance');
    const selectBank = document.getElementById('select').value;

    if (amount && pin && account && selectBank) {
        if (account.length === 11) {
            if (pin === 1234) {
                if (amount > 0) {
                    const sum = balance + amount;
                    setInnerTextByIdAndValue('main-balance', sum)

                    const container = document.getElementById('transaction-container')
                    const div = document.createElement('div');

                    div.innerHTML = `
                    <img src="assets/wallet1.png" alt="" class="w-12 h-12 bg-base-300 rounded-full p-2">
                      <div> 
                      <h1 class =""> Added money from ${selectBank} </h1>
                      <p> TK. ${amount} </p>
                      <p> account number : ${account} </p>
                      </div>
                       `
                    div.classList.add('bg-white', 'p-2', 'rounded-md', 'shadow-md' , 'm-2' , 'flex' , 'gap-4' , 'items-center')
                    container.appendChild(div)
                    container.classList.add('hidden');
                    
                    document.getElementById('view').addEventListener('click' , function(){
                        container.classList.remove('hidden');
                    })
                }
                else {
                    alert("Do not accept negative amount")
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

    // amount && pin && account  && selectBank?
    //     account.length === 11 ?
    //         pin === 1234 ?
    //             setInnerTextByIdAndValue('main-balance', balance + amount) : alert('Invalid your pin')
    //         : alert('Incorrect your account number')
    //     : alert('Please fill all requirement');


})
