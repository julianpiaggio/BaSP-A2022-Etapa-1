window.onload = function () {
    var firstName = document.getElementById('firstName'); // ✔
    var lastName = document.getElementById('lastName'); // ✔
    var phoneNumber = document.getElementById('phoneNumber'); // ✔
    var address = document.getElementById('address');
    var password = document.getElementById('password');
    var rePassword = document.getElementById('rePassword');
    var dni = document.getElementById('dni'); // ✔
    var dateBirth = document.getElementById('dateBirth');
    var city = document.getElementById('city'); // ✔
    var postalCode = document.getElementById('postalCode'); // ✔
    var mailInput = document.getElementById('mailInput'); // ✔
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; // ✔
    var paragraphErrorFirstName = document.createElement('p');
    var paragraphErrorLastName = document.createElement('p');
    var paragraphErrorPhoneNumber = document.createElement('p');
    var paragraphErrorAddress = document.createElement('p');
    var paragraphErrorPassword = document.createElement('p');
    var paragraphErrorRePassword = document.createElement('p');
    var paragraphErrorDni = document.createElement('p');
    var paragraphErrorDate = document.createElement('p');
    var paragraphErrorCity = document.createElement('p');
    var paragraphErrorPostalCode = document.createElement('p');
    var paragraphErrorMail = document.createElement('p');
    var paragraphError = document.getElementById('paragraphError');
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var letras="abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var dateBirthFinal;
    var firstNameLocalStorage = localStorage.getItem('name')
    var lastNameLocalStorage = localStorage.getItem('lastName')
    var phoneNumberLocalStorage = localStorage.getItem('phone')
    var addressLocalStorage = localStorage.getItem('address')
    var passwordLocalStorage = localStorage.getItem('password')
    var rePasswordLocalStorage = localStorage.getItem('rePassword')
    var dniLocalStorage = localStorage.getItem('dni')
    var dateBirthLocalStorage = localStorage.getItem('dob')
    var cityLocalStorage = localStorage.getItem('city')
    var postalCodeLocalStorage = localStorage.getItem('zip')
    var mailInputLocalStorage = localStorage.getItem('email')
    firstName.value = firstNameLocalStorage;
    lastName.value = lastNameLocalStorage
    phoneNumber.value = phoneNumberLocalStorage;
    address.value = addressLocalStorage;
    password.value = passwordLocalStorage;
    rePassword.value = rePasswordLocalStorage;
    dni.value = dniLocalStorage;
    dateBirth.value = dateBirthLocalStorage;
    city.value = cityLocalStorage;
    postalCode.value = postalCodeLocalStorage;
    mailInput.value = mailInputLocalStorage;

    function validateFirstName(texto){
        texto = firstName.value;
        for(i=0; i<texto.length; i++){
            console.log()
            if (letras.indexOf(texto.charAt(i),0)!=-1 && texto.length > 3){
            return true;
            }
        }
        return false;
    }
    firstName.onblur = function() {
        if (validateFirstName() === true) {
            firstName.classList.remove('redBorder');
            firstName.classList.add('greenBorder');
        } else {
            paragraphErrorFirstName.innerHTML = 'firstName is wrong';
            firstName.parentNode.appendChild(paragraphErrorFirstName);
            paragraphErrorFirstName.classList.add('redP');
            firstName.classList.remove('greenBorder');
            firstName.classList.add('redBorder');
        }
    }
    firstName.onfocus = function() {
        paragraphErrorFirstName.remove();
        firstName.classList.remove('greenBorder' , 'redBorder');
    }
    
    function validateLastName(texto){;
        texto = lastName.value;
        for(i=0; i<texto.length; i++){
            console.log()
            if (letras.indexOf(texto.charAt(i),0)!=-1 && texto.length > 3){
            return true;
            }
        }
        return false;
    }
    lastName.onblur = function() {
        if (validateLastName() === true) {
            lastName.classList.remove('redBorder');
            lastName.classList.add('greenBorder');
        } else {
            paragraphErrorLastName.innerHTML = 'lastName is wrong';
            lastName.parentNode.appendChild(paragraphErrorLastName);
            paragraphErrorLastName.classList.add('redP');
            lastName.classList.remove('greenBorder');
            lastName.classList.add('redBorder');
        }
    }
    lastName.onfocus = function() {
        paragraphErrorLastName.remove();
        lastName.classList.remove('greenBorder' , 'redBorder');
    }

    function validateDni (){
        var data = (dni.value);
        if (!isNaN(data) && data.length > 7){
            return true;
        } else {
            return false;
        }
    }
    dni.onblur = function() {
        if (validateDni() === true) {
            dni.classList.remove('redBorder');
            dni.classList.add('greenBorder');
        } else {
            paragraphErrorDni.innerHTML = ' the id is wrong';
            dni.parentNode.appendChild(paragraphErrorDni);
            paragraphErrorDni.classList.add('redP');
            dni.classList.remove('greenBorder');
            dni.classList.add('redBorder');
        }
    }
    dni.onfocus = function() {
        paragraphErrorDni.remove();
        dni.classList.remove('greenBorder' , 'redBorder');
    }
    
    function validatePhoneNumber (){
        var data = (phoneNumber.value);
        if(!isNaN(data) && data.length < 11 && data.length > 9){
            return true;
        } else {
            return false;
        }
    }
    phoneNumber.onblur = function() {
        if (validatePhoneNumber() === true) {
            phoneNumber.classList.remove('redBorder');
            phoneNumber.classList.add('greenBorder');
        } else {
            paragraphErrorPhoneNumber.innerHTML = 'the phone number is wrong';
            phoneNumber.parentNode.appendChild(paragraphErrorPhoneNumber);
            paragraphErrorPhoneNumber.classList.add('redP');
            phoneNumber.classList.remove('greenBorder');
            phoneNumber.classList.add('redBorder');
        }
    }
    phoneNumber.onfocus = function() {
        paragraphErrorPhoneNumber.remove();
        phoneNumber.classList.remove('greenBorder' , 'redBorder');
    }

    function validatePostalCode (){
        var data = (postalCode.value);
        if (!isNaN(data) && (data.length >3 && data.length <5 || data.length > 4 && data.length < 6)) {
            return true;
        } else {
            return false;
        }
    }
    postalCode.onblur = function() {
        if (validatePostalCode() === true) {
            postalCode.classList.remove('redBorder');
            postalCode.classList.add('greenBorder');
        } else {
            paragraphErrorPostalCode.innerHTML = 'the postal code is wrong';
            postalCode.parentNode.appendChild(paragraphErrorPostalCode);
            paragraphErrorPostalCode.classList.add('redP');
            postalCode.classList.remove('greenBorder');
            postalCode.classList.add('redBorder');
        }
    }
    postalCode.onfocus = function() {
        paragraphErrorPostalCode.remove();
        postalCode.classList.remove('greenBorder' , 'redBorder');
    }

    function validateCity () {
        var data = (city.value.split(''))
        for(var i=0 ; i < data.length ; i++){
            if(!isNaN(data[i]) || (data[i].toUpperCase() != data[i].toLowerCase()) && data.length > 3){
                return true;
            } else {
                return false;
            }
        }
    }
    city.onblur = function() {
        if (validateCity() === true) {
            city.classList.remove('redBorder');
            city.classList.add('greenBorder');
        } else {
            paragraphErrorCity.innerHTML = 'city is wrong';
            city.parentNode.appendChild(paragraphErrorCity);
            paragraphErrorCity.classList.add('redP');
            city.classList.remove('greenBorder');
            city.classList.add('redBorder');
        }
    }
    city.onfocus = function() {
        paragraphErrorCity.remove();
        city.classList.remove('greenBorder' , 'redBorder');
    }

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
            paragraphErrorMail.innerHTML = ' the email is wrong';
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

    function validateDateBirth () {
        var data = (dateBirth.value)
        if (data != '') {
            var dateBirthModify = dateBirth.value.split('-');
            var day = dateBirthModify[2];
            var month = dateBirthModify[1];
            var year = dateBirthModify[0];
            dateBirthFinal = month + '/' + day + '/' + year;
            return true;
        } else {
            return false;
        }
    }
    dateBirth.onblur = function() {
        if (validateDateBirth () === true)  {
            dateBirth.classList.remove('redBorder');
            dateBirth.classList.add('greenBorder');
        } else {
            paragraphErrorDate.innerHTML = 'date is wrong';
            dateBirth.parentNode.appendChild(paragraphErrorDate);
            paragraphErrorDate.classList.add('redP');
            dateBirth.classList.remove('greenBorder');
            dateBirth.classList.add('redBorder');
        } 
    }
    dateBirth.onfocus = function() {
        paragraphErrorDate.remove();
        dateBirth.classList.remove('greenBorder' , 'redBorder');
    }

    function validateLettersForAddress(texto){;
        texto = address.value;
        for(i=0; i<texto.length - 1; i++){
            if (letras.indexOf(texto.charAt(i),0)!=-1){
            return true;
            }
        }
        return false;
    }

    function validateNumbersForAddress (){
        var data = (address.value);
        if (!isNaN(data[data.length - 1]) ) {
            return true;
        } else {
            return false;
        }
    }

    function validateAdrress () {
        if (validateLettersForAddress() === true && validateNumbersForAddress() === true ) {
            return true;
        }
    }
    address.onblur = function() {
        if (validateAdrress () === true)  {
            address.classList.remove('redBorder');
            address.classList.add('greenBorder');
        } else {
            paragraphErrorAddress.innerHTML = 'address is wrong';
            address.parentNode.appendChild(paragraphErrorAddress);
            paragraphErrorAddress.classList.add('redP');
            address.classList.remove('greenBorder');
            address.classList.add('redBorder');
        } 
    }
    address.onfocus = function() {
        paragraphErrorAddress.remove();
        address.classList.remove('greenBorder' , 'redBorder');
    }

    function validateLettersForPassword(texto){
        texto = password.value;
        for(i=0; i<texto.length; i++){
            console.log()
            if (letras.indexOf(texto.charAt(i),0)!=-1 && texto.length > 3){
            return true;
            }
        }
        return false;
    }

    function validateNumbersForPassword (){
        var data = (password.value);
        if (!isNaN(data[data.length - 1]) ) {
            return true;
        } else {
            return false;
        }
    }


    function validatePassword () {
        if ((validateLettersForPassword() === true && validateNumbersForPassword() === true) && password.value.length > 7) {
            return true;
        } else {
            return false;
        }
    }
    password.onblur = function() {
        if (validatePassword () === true)  {
            password.classList.remove('redBorder');
            password.classList.add('greenBorder');
        } else {
            paragraphErrorPassword.innerHTML = 'password is wrong';
            password.parentNode.appendChild(paragraphErrorPassword);
            paragraphErrorPassword.classList.add('redP');
            password.classList.remove('greenBorder');
            password.classList.add('redBorder');
        } 
    }
    password.onfocus = function() {
        paragraphErrorPassword.remove();
        password.classList.remove('greenBorder' , 'redBorder');
    }

    function validateRePassword () {
        if (password.value === rePassword.value) {
            return true;
        } else {
            return false;
        }
    }
    rePassword.onblur = function() {
        if (validateRePassword () === true)  {
            rePassword.classList.remove('redBorder');
            rePassword.classList.add('greenBorder');
        } else {
            paragraphErrorRePassword.innerHTML = 'password is wrong';
            rePassword.parentNode.appendChild(paragraphErrorRePassword);
            paragraphErrorRePassword.classList.add('redP');
            rePassword.classList.remove('greenBorder');
            rePassword.classList.add('redBorder');
        } 
    }
    rePassword.onfocus = function() {
        paragraphErrorRePassword.remove();
        rePassword.classList.remove('greenBorder' , 'redBorder');
    }

    var submitButton = document.getElementsByClassName('supportSectionButtonStyle')[0];
    submitButton.onclick = function(e) {
        e.preventDefault();
        if (validateFirstName() && validateLastName() && validateDni() && validatePhoneNumber()
        && validatePostalCode() && validateCity() && validateMail() && validateDateBirth() && validateAdrress()
        && validatePassword() && validateRePassword()) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?name='+firstName.value+ '&lastName=' 
            +lastName.value+ '&dni=' +dni.value+ '&phone=' 
            +phoneNumber.value+ '&zip=' +postalCode.value+ '&city=' +city.value+ '&email=' +mailInput.value+
            '&dob=' +dateBirthFinal+ '&address=' +address.value+ '&password=' +password.value+ '&rePassword=' +rePassword.value)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            if (!data.success) {
                throw new Error (data.msg + '\n' + 'success: ' + data.success);
            } else {
                modal.style.display = "block";
                    paragraphError.innerText = '\n' + 'success:' + ' ' + data.success + '\n' + 'first name:' + ' ' + firstName.value + '\n' 
                    + 'last name:' + ' ' + lastName.value + '\n' + 'dni:' + dni.value + '\n' + 'the number:' 
                    + phoneNumber.value + '\n' + 'postal code:' + postalCode.value + '\n' + 'city:' + city.value + '\n'
                    + 'email:' + mailInput.value + '\n' + 'date of birth:' + dateBirthFinal + '\n' + 'address:' 
                    + address.value + '\n' + 'password:' + password.value + '\n' + 'confirm password:' 
                    + rePassword.value + '\n' +  'request:' + ' ' + data.msg
                    span.onclick = function() {
                    modal.style.display = "none";
                    }
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                localStorage.setItem('name',firstName.value);
                localStorage.setItem('lastName',lastName.value);
                localStorage.setItem('phone',phoneNumber.value);
                localStorage.setItem('address',address.value);
                localStorage.setItem('password',password.value);
                localStorage.setItem('rePassword',password.value);
                localStorage.setItem('dni',dni.value);
                localStorage.setItem('dob',dateBirth.value);
                localStorage.setItem('city',city.value);
                localStorage.setItem('zip',postalCode.value);
                localStorage.setItem('email',mailInput.value);
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
                    };
        })
        } if (!validateFirstName() === true) {
            return alert('first name is wrong');
        } if (!validateLastName() === true) {
            return alert('last name is wrong');
        } if (!validateDni() === true) {
            return alert('id is wrong');
        } if (!validatePhoneNumber() === true) {
            return alert('phone number is wrong');
        } if (!validatePostalCode() === true) {
            return alert('postal code is wrong');
        } if (!validateCity() === true) {
            return alert('city is wrong');
        } if (!validateMail() === true) {
            return alert('mail is wrong');
        } if (!validateDateBirth() === true) {
            return alert('date is wrong');
        } if (!validateAdrress() === true) {
            return alert('address is wrong');
        } if (!validatePassword() === true) {
            return alert('password is wrong');
        } if (!validateRePassword() === true) {
            return alert('confirm password is wrong');
        } 
        }
    }