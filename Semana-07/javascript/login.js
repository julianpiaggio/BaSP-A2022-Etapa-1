window.onload = function () {
    var mailInput = document.getElementById('mailInput');
    var passwordInput = document.getElementById('passwordInput');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var paragraphErrorMail = document.createElement('p');
    var paragraphErrorPassword = document.createElement('p');
    var paragraphError = document.getElementById('paragraphError');
    var numbers=["0","1","2","3","4","5","6","7","8","9"];
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];


    function validateMail () {
        if (emailExpression.test(mailInput.value)) {
            return true;
        } else {
            return false;
        }
    }
    mailInput.onblur = function() {
        if (validateMail() === true)  {
            mailInput.classList.remove('redBorder');
            mailInput.classList.add('greenBorder');
        } else {
            paragraphErrorMail.innerHTML = 'email is wrong';
            mailInput.parentNode.appendChild(paragraphErrorMail);
            paragraphErrorMail.classList.add('redP');
            mailInput.classList.remove('greenBorder');
            mailInput.classList.add('redBorder');
        } 
    }
    mailInput.onfocus = function() {
        paragraphErrorMail.remove();
        mailInput.classList.remove('greenBorder' , 'redBorder');
    }
    function validateNumbers(){
        var data = (passwordInput.value);
        for(i=0; i<data.length ; i++){
            if ((numbers.includes(passwordInput[i]))){
        } else {
            return false;
        }
    }
    }
    
    function validateLetters() {
        var data = (passwordInput.value);
        for(var i=0 ; i < data.length ; i++){
            if(data[i].toUpperCase() != data[i].toLowerCase()){
                return true;
            } else {
                return false;
            }
        }
    }
    function validatePassword () {
        if ((validateLetters() === true && validateNumbers() !== true) && passwordInput.value.length > 7) {
            return true;
        } else {
            return false;
        }
    }
    passwordInput.onblur = function() {
        if (validatePassword() === true)  {
            passwordInput.classList.remove('redBorder');
            passwordInput.classList.add('greenBorder');
        } else {
            paragraphErrorPassword.innerHTML = 'password is wrong';
            passwordInput.parentNode.appendChild(paragraphErrorPassword);
            paragraphErrorPassword.classList.add('redP');
            passwordInput.classList.remove('greenBorder');
            passwordInput.classList.add('redBorder');
        } 
    }
    passwordInput.onfocus = function() {
        paragraphErrorPassword.remove();
        passwordInput.classList.remove('greenBorder' , 'redBorder');
    }
    var submitButton = document.getElementsByClassName('supportSectionButtonStyle')[0];
    submitButton.onclick = function(e) {
        e.preventDefault();
        if (validateMail() && validatePassword()) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email='+mailInput.value+ '&password=' 
            +passwordInput.value)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            if (!data.success) {
                throw new Error (data.msg + '\n' + 'success: ' + data.success);
            } else {
                    modal.style.display = "block";
                    paragraphError.innerText = '\n' + 'success' + ' ' + data.success + '\n' + 'mail:' + ' ' + mailInput.value + '\n' + 'password:' + ' ' 
                    + passwordInput.value + '\n' + 'request:' + ' ' + data.msg
                    span.onclick = function() {
                    modal.style.display = "none";
                    }
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
            }
        })
        .catch(function(error){
            modal.style.display = "block";
                    paragraphError.innerText = error;
                    span.onclick = function() {
                    modal.style.display = "none";
                    }
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
        })
        
        } if (!validateMail() === true) {
            alert('email is wrong');
        } if (!validatePassword() === true) {
            alert('password is wrong')
        } else {
            
        }
    }
}   

