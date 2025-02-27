function getInputValueByID(id){
    // return 'helloo bos'
    // console.log('hello boss')
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value);
    // console.log(convertValue)
    return convertValue;
}


function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// function getInputValueByIDint(id){
//     const value = document.getElementById(id).value;
//     const convertValue = parseInt(value); 
//     return convertValue;
// }


function setInnerTextByIDandValue(id, value){
    // console.log(id, value);
    document.getElementById(id).innerText = value;
}