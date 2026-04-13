let isLogin = true;

// TOGGLE LOGIN/SIGNUP
function toggleAuth() {
  isLogin = !isLogin;

  document.getElementById("auth-title").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("auth-btn").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("toggle-text").innerText =
    isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login";
}

// AUTH LOGIC
function handleAuth() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (isLogin) {
    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    if (user === storedUser && pass === storedPass) {
      loginSuccess();
    } else {
      alert("Invalid credentials");
    }
  } else {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Account created! Please login.");
    toggleAuth();
  }
}

// LOGIN SUCCESS
function loginSuccess() {
  document.getElementById("auth-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

// LOGOUT
function logout() {
  document.getElementById("auth-container").style.display = "flex";
  document.getElementById("main-content").style.display = "none";
}

// CONTACT FORM
function sendMessage(e) {
  e.preventDefault();
  alert("Message sent successfully!");
}
// AUTO LOGIN IF LINK HAS #about
window.onload = function () {

  if (window.location.hash) {
    loginSuccess(); // skip login when opened from project link
  }

  else if (localStorage.getItem("user")) {
    loginSuccess(); // normal login
  }
};
