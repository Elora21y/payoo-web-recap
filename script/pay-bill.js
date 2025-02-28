// pay-bill
document.getElementById('pay-bill-box').addEventListener('click' , function(event){
    handleToggle('add-money', 'none');
    handleToggle('cashout', 'none');
    handleToggle('transfer', 'none');
    handleToggle('bonus', 'none');
    handleToggle('pay-bill', 'block');
    handleToggle('transaction', 'none');
})


document.getElementById('pay-bill-btn').addEventListener('click' , function(event){
    event.preventDefault()
    const account = document.getElementById('bill-account-number').value;
    const amount = getInputById('bill-pin-number');
    const pin = document.getElementById('bill-pin-number').value;
    const convertedPin = parseInt(pin);
    const balance = getInnerText('main-balance');
    const bill = document.getElementById('select-bill').value;

    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const time = `${hour}:${min}AM`;

    if (amount && pin && account && bill) {
        if (account.length === 11) {
            if (/^\d{4}$/.test(convertedPin)) {
                if (amount > 0) {
                    const sub = balance - amount;
                    setInnerTextByIdAndValue('main-balance', sub)

                    const container = document.getElementById('transaction-container')
                    const div = document.createElement('div');

                    div.innerHTML = `
                    <div class = "flex gap-4 items-center ">
                    <img src="assets/purse1.png" alt="" class="w-12 h-12 bg-base-300 rounded-full p-2">
                      <div> 
                      <h1 class ="text-xl font-semibold text-gray-700"> ${bill} </h1>
                      <p class = "text-gray-500"> Today ${time} </p>
                      </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                       `
                    div.classList.add('bg-white', 'p-4', 'rounded-md', 'shadow-md' , 'm-2' , 'flex' , 'gap-4' , 'items-center' , 'justify-between')

                    
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
})