
// Track failed login attempts
let loginAttempts = 0;

// Elements
const form = document.getElementById("loginForm");
const errorBox = document.getElementById("loginError");
const username = document.getElementById("username");
const password = document.getElementById("password");
const rememberMe = document.getElementById("rememberMe");

// On form submit
form.addEventListener("submit", e => {
  e.preventDefault();

  const user = username.value.trim();
  const pass = password.value.trim();
  const remember = rememberMe.checked;

  // ✅ Check credentials
  if (
    (user === "admin" && pass === "school123") ||
    (user === "staff" && pass === "campus456")
  ) {
    localStorage.setItem("isAdminLoggedIn", "true");

    if (remember) {
      localStorage.setItem("adminUsername", user);
    } else {
      localStorage.removeItem("adminUsername");
    }

    // ✅ GitHub Pages redirect
    window.location.href = "/meowwwwww.com/admin.html";
  } else {
    loginAttempts++;
    errorBox.classList.add("show");

    if (loginAttempts >= 3) {
      alert("Too many failed attempts");
      loginAttempts = 0;
    }
  }
});

// Forgot password
document.getElementById("forgotPassword").onclick = e => {
  e.preventDefault();
  alert("Contact system administrator.");
};

// On page load, populate remembered username
window.onload = () => {
  const saved = localStorage.getItem("adminUsername");
  if (saved) {
    username.value = saved;
    rememberMe.checked = true;
  }
};; 
