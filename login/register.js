const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const alert = document.querySelector(".alert-login");
const text_alert = document.querySelector(".text_alert_success");

if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify([]));
}
const user = JSON.parse(localStorage.getItem("user"));
// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "";
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email không hợp lệ");
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} ít nhất phải có ${min} ký tự`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} ít nhất phải có ${max} ký tự`);
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value === input2.value) {
    let userEmail = [];
    user.forEach((data) => {
      userEmail.push(data.Email);
    });
    if (!userEmail.includes(email.value)) {
      user.push({
        userName: username.value,
        Email: email.value,
        Password: password.value,
      });
      localStorage.setItem("user", JSON.stringify(user));
      text_alert.innerText = "Đăng ký thành công";
      alert.classList.toggle("alert-login-success");
      setTimeout(() => {
        alert.classList.toggle("alert-login-success");
        window.location.replace("http://127.0.0.1:5500/login/login.html");
      }, 1500);
      return;
    } else {
      text_alert.innerText = "Tài khoản đã tồn tại";
      alert.classList.toggle("alert-login-success");
      setTimeout(() => {
        alert.classList.toggle("alert-login-success");
      }, 1500);
    }
    if (user.length === 0) {
      user.push({
        userName: username.value,
        Email: email.value,
        Password: password.value,
      });
      localStorage.setItem("user", JSON.stringify(user));
    }
  } else {
    showError(input2, "Passwords không trùng khớp");
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!checkRequired([username, email, password, password2])) {
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  }
});
