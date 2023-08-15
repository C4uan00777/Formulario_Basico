const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

//events
form.addEventListener("submit", (e) =>{
    e.preventDefault();


    checkInputs();
});

// functions
function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const confirmPasswordValue = passwordConfirmation.value


    if( usernameValue === ""){
        setErrorFor(username, "O nome de usuario é obrigatorio")
    }else{
        setSuccessFor(username)
    }


    if(emailValue === ""){
        setErrorFor(email, "O email é obrigatorio")

    } else if (!checkEmail(emailValue)){
        setErrorFor(email,"Insira um email válido")

    } else{
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, "A senha é obrigatoria")

    }
    else if (passwordValue.length < 7){
        setErrorFor(password, "mínimo 7 caracteres" )
    } else{
        setSuccessFor(password)
    }


     if(confirmPasswordValue === ""){
        setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatória")
    }

    else if(confirmPasswordValue !== passwordValue){
        setErrorFor(passwordConfirmation, "A senha está incorreta")
    }
    else if(confirmPasswordValue.length < 7){
        setErrorFor(passwordConfirmation, "mínimo 7 caracteres")
    } else{
        setSuccessFor(passwordConfirmation)
    }
}

const formControls = form.querySelectorAll(".form-control");

const formIsValid = [...formControls].every((formControl) => {
  return formControl.classList === "form-control success";
});

if (formIsValid) {
  console.log("O formulário está 100% válido!");
}










function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //add Message for error class 
   small.innerText = message;


   formControl.classList = "form-control error";

}


function setSuccessFor(input){

 const formControl = input.parentElement;

//add success class 

formControl.classList = "form-control success"
}





function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }