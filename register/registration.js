// Create a check for password strength in registration form
let state = false;
const password = document.getElementById("pass-create");
const passCheck = document.getElementById("popover-password")
const passwordStrength= document.getElementById("password-strength");
const showPass= document.querySelector(".show-pass");
const lowUppCase = document.querySelector(".low-upp-case i");
const number = document.querySelector(".one-number i");
const specialChar = document.querySelector(".one-special-char i");
const eightChar = document.querySelector(".eight-character i");
const passConfirm = document.getElementById("pass-confirm");
const wrongPass = document.getElementById("wrong-pass-alert");
const regBtn = document.getElementById("reg-account");

password.addEventListener("keyup", function() {
  passCheck.style.display = "block";
  let pass = document.getElementById("pass-create").value;
  checkPasswordStrength(pass);
}); 

passConfirm.addEventListener("input", function() {
  passCheck.style.display = "none";
})

function toggle() {
  if (state){
    password.setAttribute("type", "password");
    state = false;
  } else {
    password.setAttribute("type", "text");
    state = true;
  }
}

function myFunction(show) {
  show.classList.toggle("fa-eye-slash");
  show.classList.toggle("fa-eye");
}

function checkPasswordStrength(password) {
  let strength = 0;
  
  // Check password length
  if (password.length > 7) {
    strength += 1;
    eightChar.classList.remove("fa-circle");
    eightChar.classList.add("fa-check");
  } else {
    eightChar.classList.add("fa-circle");
    eightChar.classList.remove("fa-check");
  }

  // Check for mixed case
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    lowUppCase.classList.remove("fa-circle");
    lowUppCase.classList.add("fa-check");
  } else {
    lowUppCase.classList.add("fa-circle");
    lowUppCase.classList.remove("fa-check");
  }

  // Check for numbers
  if (password.match(/([0-9])/)) {
    strength += 1;
    number.classList.remove("fa-circle");
    number.classList.add("fa-check");
  } else {
    number.classList.add("fa-circle");
    number.classList.remove("fa-check");
  }

  // Check for special characters
  if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/)) {
    strength += 1;
    specialChar.classList.remove("fa-circle");
    specialChar.classList.add("fa-check");
  } else {
    specialChar.classList.add("fa-circle");
    specialChar.classList.remove("fa-check");
  }
  
  // Return results
  if (strength < 2) {
    passwordStrength.classList.remove("progress-bar-warning");
    passwordStrength.classList.remove("progress-bar-success");
    passwordStrength.classList.add("progress-bar-danger");
    passwordStrength.style = "width: 10%";
  } else if (strength == 3) {
    passwordStrength.classList.remove("progress-bar-success");
    passwordStrength.classList.remove("progress-bar-danger");
    passwordStrength.classList.add("progress-bar-warning");
    passwordStrength.style = "width: 60%";
  } else if (strength == 4) {
    passwordStrength.classList.remove("progress-bar-warning");
    passwordStrength.classList.remove("progress-bar-danger");
    passwordStrength.classList.add("progress-bar-success");
    passwordStrength.style = "width: 100%";
  }
}

function validatePassword() {
  let pass = password.value;
  let confirm = passConfirm.value;
  if (pass != confirm) {
    wrongPass.style.color = "red";
    wrongPass.innerHTML = "❌ Use same password";
    regBtn.disabled = true;
    regBtn.style.opacity = (0.4);
  } else {
    wrongPass.style.color = "green";
    wrongPass.innerHTML = "✅ Password Matched";
    regBtn.disabled = false;
    regBtn.style.opacity = (1);
  }
}