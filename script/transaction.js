// transaction-history
document.getElementById('transaction-box').addEventListener('click' , function(event){
    handleToggle('add-money', 'none');
    handleToggle('cashout', 'none');
    handleToggle('transfer', 'none'); 
    handleToggle('bonus', 'none');
    handleToggle('pay-bill', 'none');
    handleToggle('transaction' , 'block')
})