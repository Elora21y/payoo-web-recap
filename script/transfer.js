// transfer money
document.getElementById('transfer-box').addEventListener('click', function (event) {
    handleToggle('add-money', 'none');
    handleToggle('cashout', 'none');
    handleToggle('transfer', 'block');
    handleToggle('bonus', 'none');
    handleToggle('pay-bill', 'none');
    handleToggle('transaction', 'none');
})
