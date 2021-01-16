//Phone Increase
const phoneIncrease = document.getElementById('phone-increase');
phoneIncrease.addEventListener('click', function(){
    productHandelar('phone', true);
})

//Phone Decrease
const phoneDecrease = document.getElementById('phone-decrease');
phoneDecrease.addEventListener('click', function(){
    productHandelar('phone',false);
})



//Case Increase
const caseIncrease = document.getElementById('case-increase');
caseIncrease.addEventListener('click', function(){
    productHandelar('case', true)
   
})

//Case Decrease
const caseDecrease = document.getElementById('case-decrease');
caseDecrease.addEventListener('click', function(){
    productHandelar('case', false);
})



function productHandelar(product, isItIncrease){
    const productValue = document.getElementById(product + '-value');
    const productIntValue = parseInt(productValue.value);

    let productNewValue = productIntValue;
    if(isItIncrease == true){
        productNewValue = productIntValue + 1;
    } 
    if (isItIncrease == false && productNewValue > 0){
        productNewValue = productIntValue - 1;
    }

    productValue.value = productNewValue;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewValue * 1200
       
    } if(product == 'case'){
        productTotal = productNewValue * 59;
    }
    document.getElementById(product + '-price').innerText = productTotal;   
     
}








// function phoneHandelar(isItIncrease){
//     const phoneValue = document.getElementById('phone-value');
//     const phoneIntValue = parseInt(phoneValue.value);
//     let phoneNewValue = phoneIntValue;
//     if(isItIncrease == true){
//         phoneNewValue = phoneIntValue + 1
//     } 
//     if(isItIncrease == false && phoneNewValue > 0){
//         phoneNewValue = phoneIntValue - 1
//     }
    
//     phoneValue.value = phoneNewValue;
//     const phoneTotal = phoneNewValue * 1000;
//     document.getElementById('phone-price').innerText = phoneTotal;
// }






// function caseHandelar(isItIncrease){
//     const caseValue = document.getElementById('case-value');
//     const caseIntValue = parseInt(caseValue.value);

//     let caseNewValue = caseIntValue;
//     if(isItIncrease == true){
//         caseNewValue = caseIntValue + 1;
//     } 
//     if (isItIncrease == false && caseNewValue > 0){
//         caseNewValue = caseIntValue - 1;
//     }

//     caseValue.value = caseNewValue;
//     const caseTotal = caseNewValue * 59;
//     document.getElementById('case-price').innerText = caseTotal;    
// }



