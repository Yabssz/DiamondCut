document.getElementById("login")
.addEventListener('submit', function(event){
    event.preventDefault();
    
    var valName = document.login.name.value;
    var valEmail = document.login.email.value;
    var valPhone = document.login.phone.value;
    var valPw = document.login.pw.value
    var valConfirm = document.login.confirm.value;
    var valTos = document.login.tos;

    let isValid = true;

    console.log(valName);

    if(valName.length < 6){
        document.getElementById("name")
        .innerHTML = "Name must be longer than 6 characters";

        isValid = false;
    }
    else{
        document.getElementById("name")
        .innerHTML = "";
    }

    if(valEmail === ""){
        document.getElementById("email")
        .innerHTML = "Email must be filled";
        isValid = false;
    } 
    else if (valEmail.endsWith("@gmail.com") === false){
        document.getElementById("email")
        .innerHTML = "Must end with @gmail.com";
        isValid = false;
    }
    else{
        document.getElementById("email")
        .innerHTML = "";
    }

    if(valPhone === ""){
        document.getElementById("phone")
        .innerHTML = "Phone number must be filled";
    }else if(isNaN(valPhone)){
        document.getElementById("phone")
        .innerHTML = "Input must be a number";
    }
    else{
        if(!valPhone.startsWith('08')){
            document.getElementById("phone")
            .innerHTML = "Phone number must starts with 08";
            isValid = false;
        }
        else{
            document.getElementById("phone")
            .innerHTML = "";
        }
    }

    if(!validatePass(valPw)){
        document.getElementById('password')
        .innerHTML = "Password must be alphanumerical";
        isValid = false;
    }
    else{
        document.getElementById('password')
        .innerHTML = "";
    }

    if(valConfirm != valPw){
        document.getElementById('confirm')
        .innerHTML = "Password doesn't match";
        isValid = false;
    }
    else{
        document.getElementById('confirm')
        .innerHTML = "";
    }
    if(!valTos.checked){
        document.getElementById("tos")
        .innerHTML = "You must agree to terms of services";
        isValid = false;
    }
    else{
        document.getElementById("tos")
        .innerHTML = "";
    }

    if(isValid == true) {
        alert("Successfully submitted")
    }
})

function validatePass(pwd){
    let haveNum = false;
    let haveLetter = false;
    let haveSym = false;

    for(let i = 0; i < pwd.length; i++){
        const chars = pwd[i];
        if(chars >= 'a' && chars <= 'z' || chars >= 'A' && chars <= 'Z'){
            haveLetter = true;
        }
        else if(chars >= 0 && chars <= 9){
            haveNum = true;
        }
        else{
            haveSym = true;
        }
    }
    return haveLetter && haveNum && !haveSym;
}