document.getElementById('add-mony-1').addEventListener('click', function(event){
    event.preventDefault();
    // const value = getInputValueByID()
    // console.log(value)
    const amount = getInputValueByID('amount-add')
    // console.log(amount)
    const pinNumber = getInputValueByID('pin-number');
    // console.log(amount, pinNumber);
   const accountNumber = document.getElementById('account-number').value;
   const mainBalance = getInnerTextByID("main-balance-add")
    console.log(mainBalance);

     if(amount <=0){
        alert('please type positive number')
        return;
     }



    if(accountNumber.length === 11){
    if(pinNumber === 1234){
    //  console.log('ok')
    const sum = mainBalance + amount;
    // document.getElementById('"main-balance-add"').innerText = sum;
    setInnerTextByIDandValue("main-balance-add", sum)

        const container = document.getElementById('transaction-container')
        const p = document.createElement('p');
        p.innerText = `
        added ${amount} from ${accountNumber} account
        `
        //   console.log(p)
        container.appendChild(p)


    }
    else{
        console.log('wrong pin')
    }
    }
    else{
       console.log('wrong account number') 
    }

});