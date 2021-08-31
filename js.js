document.getElementById('sButton').addEventListener('click', function(){
    const userEmail =  document.getElementById('inputEmail');
    const desireEmail = userEmail.value;
    const userPassword = document.getElementById('inputPass');
    const desirePass = userPassword.value;
    

    if(desireEmail == 'takadaw@abba.com' && desirePass == 'abbaami'){
        window.location.href = 'banking.html';
        }
})