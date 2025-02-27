document.getElementById('pay-bill-btn').addEventListener('click', function(event){
    event.preventDefault()
    // console.log('pay bill')
  const accountNumber =  document.getElementById('account-number').value;
    // console.log(accountNumber)
    const amount = getInputValueByID('pay-bill-amount');
    // console.log(accountNumber, amount)
    const pinNumber = getInputValueByID('py-bill-pin-number')
    // console.log(pinNumber)
    const mainBalance =getInnerTextByID('main-balance-add')

    if(accountNumber.length ===11) {
        // console.log('oky');
        if(pinNumber === 1234){
           
           const sum = mainBalance - amount;
           setInnerTextByIDandValue('main-balance-add', sum)
        }
        else{

        }
    } else {
        console.log('Wrong account number');
        alert('Wrong account number');
    }

})