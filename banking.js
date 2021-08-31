// // Diposite Action
// document.getElementById('diposit-btn').addEventListener('click', function(){
//     const dipositField = document.getElementById('diposit-field');
//     const newDipositAmount = dipositField.value;
//     dipositField.value ='';
    
//     const PreviousAmount = document.getElementById('current-diposit')
//     const visibleDipositAmount = Number(PreviousAmount.innerText) + Number(newDipositAmount);
    
//     PreviousAmount.innerText = visibleDipositAmount;
// // Balance Action
//     const defultBalance = document.getElementById('current-balance');
// const updateBalance = Number(newDipositAmount) + Number(defultBalance.innerText);
// defultBalance.innerText = updateBalance;
// })


// // Withdraw Action
// document.getElementById('withdraw-btn').addEventListener('click', function(){
//     const withdrawField = document.getElementById('withdrawfield');
//     const withdrawAmount = withdrawField.value;
//     withdrawField.value = '';

//     const withdrawedAmount = document.getElementById('withdrawed-Amount');
//      withdrawedAmount.innerText = withdrawAmount; 
    
//      // Withdraw minus from Balance
//      const minusBalance = document.getElementById('current-balance');
//      const Balanceminus = Number(minusBalance.innerText) - Number(withdrawAmount);
//      minusBalance.innerText = Balanceminus;
// })



// Common Action of Diposite & Withdraw Printing
function getInputValue(inputAmount){
    const inputField = document.getElementById(inputAmount);
    const textToNum = parseFloat(inputField.value);
    inputField.value = '';
    return textToNum;
    
}


// Common Action of Total Diposite & Withdraw
function totalInputAmout(amount,sejan ){
    const priviousAmmout = Number(amount);
    const printAmount = document.getElementById(sejan); 
    dipositeAmount = printAmount.innerText;
    
    const totalAmount = priviousAmmout + Number(dipositeAmount);
    printAmount.innerText = totalAmount;
}
// Diposite Printing Action

document.getElementById('diposit-btn').addEventListener('click', function(){
    const dipositeAmount = getInputValue('diposit-field')
    if(dipositeAmount > 0){
        totalInputAmout(dipositeAmount,'current-diposit');
    updateBalance(dipositeAmount, true);
    }

    // Add To Balance

    // const defultBalance = document.getElementById('current-balance');
    // const updateBalance = Number(defultBalance.innerText) + Number(dipositeAmount);
    // defultBalance.innerText = updateBalance;
    
})
function updateBalance(newAmount,isAdd){
    const defultBalance = document.getElementById('current-balance');
    const updateBalance = Number(defultBalance.innerText);
    
    
     if(isAdd == true){
         defultBalance.innerText = updateBalance + Number(newAmount);
    }
    else{
        defultBalance.innerText = updateBalance - Number(newAmount);
    }
}


// Withdraw Printing Action

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdrawfield')

    if(withdrawAmount > 0){
        totalInputAmout(withdrawAmount,'withdrawed-Amount');
        updateBalance(withdrawAmount, false);
    }
})  