let isLogin = true;

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Programs must be written for people to read.",
  "Experience is the name everyone gives to their mistakes.",
  "Fix the cause, not the symptom.",
  "Simplicity is the soul of efficiency.",
  "Great developers never stop learning."
];

function showQuote() {
  const quoteText = document.getElementById("quote");

  quoteText.style.opacity = 0;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
    quoteText.style.opacity = 1;
  }, 300);
}

setInterval(showQuote, 4000); // changes every 4 sec

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
  const username = document.querySelector("#auth-container #username").value;
  const password = document.querySelector("#auth-container #password").value;

  if (username === "admin" && password === "1234") {

    // Hide login
    document.getElementById("auth-container").style.display = "none";

    // Show portfolio
    document.getElementById("main-content").style.display = "block";

  } else {
    alert("Invalid login");
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
// FADE-IN ON SCROLL
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));

function loginSuccess() {
  document.getElementById("auth-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";

  let user = localStorage.getItem("user");
  document.getElementById("welcome-text").innerText = "Welcome, " + user;
}

showQuote();
