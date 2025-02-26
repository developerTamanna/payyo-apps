document.getElementById('cashout-btn').addEventListener('click', function(event){
  event.preventDefault();
  const accountNumber = document.getElementById('account-number').value;
  const amount = getInputValueByID('cashout-amount');
//   console.log(amount)
  const pinNumber = getInputValueByID('cashout-pin-number');
  const mainBalance = getInnerTextByID('main-balance-add')
  if(accountNumber.length ===11){
      if(pinNumber===1234){
       const sum = mainBalance - amount;
       setInnerTextByIDandValue('main-balance-add', sum)
      }
      else{
          alert('pin invalid')
      }
  }
  else{
    alert('account number in wrong')
  }
})