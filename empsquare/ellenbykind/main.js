const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');

const signupBtn = document.querySelector('.signup-btn');
const loginBtn= document.querySelector('.login-btn');

const signupX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');

const formContainer = document.querySelector('.form-container')

signupBtn.addEventListener('click', () => {
  signupModal.classList.add('display'),
  formContainer.classList.add('disable');
  form.className = "form sign-up";
  clearForm();
})

loginBtn.addEventListener('click', ()=>{
  loginModal.classList.add('display'),
  formContainer.classList.add('disable');
  form.className = "form login";
  clearForm();
})

signupX.addEventListener('click', ()=>{
  signupModal.classList.remove('display'),
  formContainer.classList.remove('disable');
})

loginX.addEventListener('click', ()=>{
  loginModal.classList.remove('display');
  formContainer.classList.remove('disable');
})


const clearForm = () => {
  document.querySelectorAll(".input-group").forEach((item) => {
    item.className = "input-group";
  });
  form.reset();
};



const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const error = (input, message) => {
  const inputWrapper = input.parentElement;
  inputWrapper.className = "input-group error";
  inputWrapper.querySelector(".message").textContent = message;
};

const success = (input) => {
  const inputWrapper = input.parentElement;
  inputWrapper.className = "input-group success";
};

const checkEmail = (input) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEx.test(input.value.trim())) {
    success(input);
  } else {
    error(input, "Email is not valid");
  }
};

const checkRequiredFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      if (input.id === "password2") {
        error(input, "Password confirmation is required");
      } else {
        error(input, `${input.id} is required`);
      }
    } else {
      success(input);
    }
  });
};
