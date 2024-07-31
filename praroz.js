const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const searchinput = document.querySelector("inputdiv");
  menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };
  cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
  };
  searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };

 


const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');



form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Email validation
    if(emailValue === ''){
        setErrorfor(email, 'email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorfor(email, 'email must include @ and .com');
    }else{
        setSuccessfor (email);
    }
    
    // Password validation
    if(passwordValue === ''){
        setErrorfor(password, 'Password cannot be blank');
    }else if(passwordValue.length < 8 ){
        setErrorfor(password, 'Password cannot be less than 8')
    }
    else if(!isValidPassword(passwordValue)){
        setErrorfor(password, 'password must contain letters, numbers and special chraracters')
    }else{
        setSuccessfor(password);
    }
}


function setErrorfor(input, message){
    const form = input.parentElement;
    const small = form.querySelector('small');

    small.innerText=message;
    form.className = "form-control error";
};

function setSuccessfor(input){
    const form = input.parentElement;
    form.className = 'form-control success';
}









// function isEmail(email) {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);} 
// function isValidPassword(password) {return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password);}

// form.addEventListener('submit', (e)=>{

//     e.preventDefault();
    
// })


//     if(passwordValue == ('') || passwordValue == null){
//         setErrorfor(password, passwordError);
//     }
//     else if(passwordValue.length <= 8){
//         setErrorfor(password)
//     }
//     else if(!isValidPassword(passwordValue)){
//         setErrorfor(password, 'passwordError');
//         // passwordError.innerHTML = 'email';
//     }
//     else{
//         setSuccessfor(password);
//     }


