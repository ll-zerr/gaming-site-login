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

password.addEventListener("keyup", function() {
  passCheck.style.display = "block";
  showPass.style.top = "38%";
  let pass = document.getElementById("pass-create").value;
  checkPasswordStrength(pass);
}); 

passConfirm.addEventListener("input", function() {
  passCheck.style.display = "none";
  showPass.style.top = "42.5%";
})

function toggle() {
  if (state){
    document.getElementById("pass-create").setAttribute("type", "password");
    state = false;
  } else {
    document.getElementById("pass-create").setAttribute("type", "text");
    state = true;
  }
}

function myFunction(show) {
  show.classList.toggle("fa-eye-slash");
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

