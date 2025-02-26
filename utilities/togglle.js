document.getElementById('cash-out').style.display = 'none'
document.getElementById('transaction-hiostory').style.display = 'none'
  
document.getElementById('add-money-box').addEventListener('click', function(){
    handleToggle('add-mony', 'block')
    handleToggle('cash-out', 'none')
    handleToggle('transaction-hiostory', 'none')
})
document.getElementById('cashout-box').addEventListener('click', function(){
    handleToggle('add-mony', 'none')
    handleToggle('cash-out', 'block')
    handleToggle('transaction-hiostory', 'none')
})




function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}
