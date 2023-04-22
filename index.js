const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal + "you are welome to our community");
    }
}

const SuccessMsg = (firstnameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(firstnameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}

function Validate(){
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

    //username
    if(firstnameVal === ""){
        setErrorMsg(firstname, 'Please Enter First Name');
    }
    else if(firstnameVal.length <=2){
        setErrorMsg(firstname, 'Input Minimum 3 characters!');
    }
    else{
        setSuccessMsg(firstname);
    }

    //last name

    if(lastnameVal === ""){
        setErrorMsg(lastname, 'Please Enter Last Name');
    }
    else if(lastnameVal.length <=2){
        setErrorMsg(lastname, 'Input Minimum 3 characters!');
    }
    else{
        setSuccessMsg(lastname);
    }
	//username

	if(usernameVal === ""){
        setErrorMsg(username, 'Please Enter Prefferred Username');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'Input Minimum 3 characters!');
    }
    else{
        setSuccessMsg(username);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'Please Enter Password');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'Input Minimum 8 characters!');
    }
    else{
        setSuccessMsg(password);
    }
	SuccessMsg(usernameVal);


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

