const emailEl = document.querySelector("#email");
const firstnameEl = document.querySelector("#firstname");
const lastnameEl = document.querySelector("#lastname");
const telEl = document.querySelector("#tel");
const languageEl = document.querySelector("#language");
// let ageEl = document.querySelectorAll('input[name="age"]');
let buttonset1 = document.getElementById("ageReachButton");
const ethnicEl = document.querySelector("#ethnicity");
// const communicateE1 = document.querySelectorAll('input[name="communicate"]');
// const hearE1 = document.querySelectorAll('input[name="hear"]');
// const residentE1 = document.querySelectorAll('input[name="resident"]');
let buttonset2 = document.getElementById("hearResButton");
const inspireEl = document.querySelector("#inspire");
const achieveEl = document.querySelector("#achieve");
const form = document.querySelector("#signup");

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkFirstname = () => {
  let valid = false;

  const min = 3,
    max = 25;

  const firstname = firstnameEl.value.trim();

  if (!isRequired(firstname)) {
    showError(firstnameEl, "Firstname cannot be blank.");
  } else if (!isBetween(firstname.length, min, max)) {
    showError(
      firstnameEl,
      `Firstname must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(firstnameEl);
    valid = true;
  }
  return valid;
};

const checkLastname = () => {
  let valid = false;

  const min = 3,
    max = 25;

  const lastname = lastnameEl.value.trim();

  if (!isRequired(lastname)) {
    showError(lastnameEl, "Lastname cannot be blank.");
  } else if (!isBetween(lastname.length, min, max)) {
    showError(
      lastnameEl,
      `Lastname must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(lastnameEl);
    valid = true;
  }
  return valid;
};

const checkPhone = () => {
  let valid = false;
  const phone = telEl.value;
  if (!isRequired(phone)) {
    showError(telEl, "PhoneNumber cannot be blank.");
  } else if (!isPhoneValid(phone)) {
    showError(telEl, "PhoneNumber is not valid.");
  } else {
    showSuccess(telEl);
    valid = true;
  }
  return valid;
};

const checkLanguage = () => {
  let valid = false;

  const min = 3,
    max = 25;

  const language = languageEl.value.trim();

  if (!isRequired(language)) {
    showError(languageEl, "Language cannot be blank.");
  } else if (!isBetween(language.length, min, max)) {
    showError(
      languageEl,
      `Laanguage must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(languageEl);
    valid = true;
  }
  return valid;
};

const checkEthnicity = () => {
  let valid = false;
  let selectedValue;
  if (ethnicEl.selectedIndex < 1) {
    showError(ethnicEl, "Ethnicity cannot be blank.");
  } else {
    showSuccess(ethnicEl);
    valid = true;
  }
  return valid;
};

function setColor(color, pclass, name) {
  let isValid = false;

  let el = document.getElementById(pclass);
  document.getElementsByName(name).forEach((node) => {
    if (node.checked === true) {
      node.parentElement.style.background = color;
      isValid = true;
      var r3 = el.closest("div p");
      r3.style.color = "green";
    } else {
      node.parentElement.style.background = "rgba(0, 0, 0, 0.5)";
    }
  });
  console.log(isValid, pclass.name);
  return isValid;
}

const checkAge = () => {
  let valid = false;
  let p = document.querySelector("#div-radiogrp1");
  let buttonset1 = document.getElementById("ageReachButton");
  let inputs = buttonset1.getElementsByTagName("input");
  buttonset1.onchange = (evt) => {
    switch (evt.target) {
      case document.getElementById("rbutton1"):
        valid = setColor("rgba(146, 189, 231, 1)", "agesgrp", "age");

        break;
      case document.getElementById("rbutton2"):
        valid = setColor("rgba(146, 189, 231, 1)", "agesgrp", "age");
        break;
      case document.getElementById("rbutton3"):
        valid = setColor("rgba(146, 189, 231, 1)", "agesgrp", "age");
        break;
      case document.getElementById("rbutton4"):
        valid = setColor("rgba(146, 189, 231, 1)", "agesgrp", "age");

        break;
      case document.getElementById("rbutton5"):
        valid = setColor("rgba(146, 189, 231, 1)", "agesgrp", "age");

        break;
      case document.getElementById("rbutton6"):
        valid = setColor("rgba(146, 189, 231, 1)", "agesgrp", "age");

        break;
      case document.getElementById("rbutton7"):
        valid = setColor("rgba(146, 189, 231, 1)", "agesgrp", "age");

        break;
      default:
        valid = false;
        break;
    }
    if (valid) {
      p.style.background = "green";
    } else {
      p.style.background = "red";
      const error = p.querySelector("small");
      error.textContent = "Check one of the buttons";
    }
  };
  return valid;
};

const checkCommunicate = () => {
  let valid = false;
  let p = document.querySelector("#div-radiogrp2");
  buttonset1.onchange = (evt) => {
    switch (evt.target) {
      case document.getElementById("rbutton8"):
        valid = setColor("rgba(146, 189, 231, 1)", "preferred", "communicate");

        break;
      case document.getElementById("rbutton9"):
        valid = setColor("rgba(146, 189, 231, 1)", "preferred", "communicate");

        break;
      case document.getElementById("rbutton10"):
        valid = setColor("rgba(146, 189, 231, 1)", "preferred", "communicate");

        break;
      case document.getElementById("rbutton11"):
        valid = setColor("rgba(146, 189, 231, 1)", "preferred", "communicate");

        break;
      default:
        valid = false;
        break;
    }
    if (valid) {
      p.style.background = "green";
    } else {
      p.style.background = "red";
      const error = p.querySelector("small");
      error.textContent = "Check one of the buttons";
    }
  };
  return valid;
};

const checkHear = () => {
  let valid = false;
  let p = document.querySelector("#div-radiogrp3");
  buttonset1.onchange = (evt) => {
    switch (evt.target) {
      case document.getElementById("rbutton12"):
        valid = setColor("rgba(146, 189, 231, 1)", "aboutprgm", "hear");

        break;
      case document.getElementById("rbutton13"):
        valid = setColor("rgba(146, 189, 231, 1)", "aboutprgm", "hear");

        break;
      case document.getElementById("rbutton14"):
        valid = setColor("rgba(146, 189, 231, 1)", "aboutprgm", "hear");

        break;
      case document.getElementById("rbutton15"):
        valid = setColor("rgba(146, 189, 231, 1)", "aboutprgm", "hear");
        break;
      case document.getElementById("rbutton16"):
        valid = setColor("rgba(146, 189, 231, 1)", "aboutprgm", "hear");

        break;
      case document.getElementById("rbutton17"):
        valid = setColor("rgba(146, 189, 231, 1)", "aboutprgm", "hear");

        break;
      default:
        valid = false;
        break;
    }
    if (valid) {
      p.style.background = "green";
    } else {
      p.style.background = "red";
      const error = p.querySelector("small");
      error.textContent = "Select one of the buttons";
    }
  };
  return valid;
};

const checkResident = () => {
  let valid = false;
  let p = document.querySelector("#div-radiogrp4");
  buttonset1.onchange = (evt) => {
    switch (evt.target) {
      case document.getElementById("rbutton12"):
        valid = setColor("rgba(146, 189, 231, 1)", "shelterSafe", "resident");

        break;
      case document.getElementById("rbutton13"):
        valid = setColor("rgba(146, 189, 231, 1)", "shelterSafe", "resident");

        break;
      case document.getElementById("rbutton14"):
        valid = setColor("rgba(146, 189, 231, 1)", "shelterSafe", "resident");

        break;
      case document.getElementById("rbutton15"):
        valid = setColor("rgba(146, 189, 231, 1)", "shelterSafe", "resident");
        break;
      case document.getElementById("rbutton16"):
        valid = setColor("rgba(146, 189, 231, 1)", "shelterSafe", "resident");

        break;
      case document.getElementById("rbutton17"):
        valid = setColor("rgba(146, 189, 231, 1)", "shelterSafe", "resident");

        break;
      default:
        valid = false;
        break;
    }
    if (valid) {
      p.style.background = "green";
    } else {
      p.style.background = "red";
      const error = p.querySelector("small");
      error.textContent = "Check one of the buttons";
    }
  };
  return valid;
};

const checkInspire = () => {
  let valid = false;
  const min = 3,
    max = 70;
  const inspire = inspireEl.value.trim();

  if (!isRequired(inspire)) {
    showError(inspireEl, "Goals cannot be blank.");
  } else if (!isBetween(inspire.length, min, max)) {
    showError(inspireEl, `Goals must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(inspireEl);
    valid = true;
  }
  return valid;
};

const checkAchievement = () => {
  let valid = false;
  const min = 3,
    max = 70;
  const achieve = achieveEl.value.trim();

  if (!isRequired(achieve)) {
    showError(achieveEl, "What do you acheive cannot be blank.");
  } else if (!isBetween(achieve.length, min, max)) {
    showError(
      achieveEl,
      `What do you acheive must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(achieveEl);
    valid = true;
  }
  return valid;
};

const showError = (input, message) => {
  // get the form-field element
  console.log(input.parentElement);
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

const isEmailValid = (email) => {
  const res = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(email);
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const isSelected = (value) =>
  value === undefined || value === "" ? false : true;
const isPhoneValid = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(phone);
};

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isEmailValid = checkEmail(),
    isFirstnameValid = checkFirstname(),
    isLastnameValid = checkLastname(),
    isPhoneValid = checkPhone(),
    isLanguage = checkLanguage(),
    isEthnicityValid = checkEthnicity(),
    isAgeValid = checkAge(),
    isCommunicateValid = checkCommunicate(),
    isHearValid = checkHear(),
    isResidentValid = checkResident(),
    isInspireValid = checkInspire(),
    isAchievementValid = checkAchievement();

  let isFormValid =
    isEmailValid &&
    isFirstnameValid &&
    isLastnameValid &&
    isPhoneValid &&
    isLanguage &&
    isEthnicityValid &&
    isAgeValid &&
    isCommunicateValid &&
    isResidentValid &&
    isHearValid &&
    isInspireValid &&
    isAchievementValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    document.getElementById("signup").submit();
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (e) {
    console.log(e.target.id);

    switch (e.target.id) {
      case "firstname":
        checkFirstname();
        break;
      case "lastname":
        checkLastname();
        break;
      case "email":
        checkEmail();
        break;
      case "tel":
        checkPhone();
        break;
      case "language":
        checkLanguage();
        break;
      case "ethnicity":
        checkEthnicity();
        break;

      case "age":
        checkAge();
        break;
      case "communicate":
        checkCommunicate();
        break;
      case "hear":
        checkHear();
        break;
      case "resident":
        checkResident();
        break;
      case "inspire":
        checkInspire();
        break;
      case "achieve":
        checkAchievement();
        break;
    }
  })
);

const Reset = () => {
  document.getElementById("signup").reset();
  let mainTitle = document.getElementById("mainTitle");
  mainTitle.innerHTML = "";
};

///store in local browser// get inputs and radio/checkbox buttons
var inputz = document.querySelectorAll(
    "input[type='text'], input[type='number'], input[type='email'], input[type='tel']"
  ),
  buttonz = document.querySelectorAll(
    "input[type='radio'], input[type='checkbox']"
  );

// main title is updated if returning user (if localStorage set)
let mainTitle = document.getElementById("mainTitle");

// change h1 title if returning user otherwise set to default
let storedName = localStorage.firstName;
if (storedName)
  mainTitle.innerHTML = "Welcome back " + storedName + ",<br/>continue ";
else mainTitle.innerHTML = "";

// get and set localStorage for radio/checkbox buttons
Array.prototype.forEach.call(buttonz, function (el, index, array) {
  // get element Id to use as localStorage property name
  let dataName = el.getAttribute("name"),
    // set dataStored var
    dataStored = localStorage.getItem(dataName);
  // if dataStored and dataStored = the input value
  // set input to checked
  if (dataStored && el.value == dataStored) {
    el.checked = true;
  }

  // on blur save data input
  el.addEventListener("click", function (event) {
    localStorage.setItem(dataName, event.target.value);
  });
});

// get and set localStorage for text/number/tel inputs
Array.prototype.forEach.call(inputz, function (el, index, array) {
  // get element Id to use as localStorage property name
  let dataName = el.getAttribute("id"),
    // set dataStored var
    dataStored = localStorage.getItem(dataName);
  // if dataStored set input value to data
  if (dataStored) el.value = localStorage.getItem(dataName);

  // on blur save data input
  el.addEventListener("blur", function (event) {
    localStorage.setItem(dataName, event.target.value);
    console.log(localStorage.getItem(dataName));
  });
});

// for simple debugging
console.log(localStorage);
function logStorage() {
  console.log(localStorage);
}
function clearStorage() {
  localStorage.clear();
  logStorage();
}
