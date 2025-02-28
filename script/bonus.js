// get bonus
document.getElementById('bonus-box').addEventListener('click' , function(event){
    handleToggle('add-money', 'none');
    handleToggle('cashout', 'none');
    handleToggle('transfer', 'none');
    handleToggle('bonus', 'block');
    handleToggle('pay-bill', 'none');
    handleToggle('transaction', 'none');

})