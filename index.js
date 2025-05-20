const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItems = document.querySelectorAll(".nav-list ul li a");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
}

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header.container");
  if (header) {
    if (window.scrollY > 250) {
      header.style.backgroundImage = "linear-gradient(60deg, #b73bcf 0%, #6bc6e2 100%)";
    } else {
      header.style.backgroundImage = ""; // Resets back to initial background style
    }
  }
});

const openAuthModal = document.getElementById('openAuthModal');
const authModal = document.getElementById('authModal');
const closeModalBtn = document.getElementById('closeModal');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const loginBtn = document.querySelector('.login-form button');
const registerBtn = document.querySelector('.register-form button');

// Open modal
openAuthModal.addEventListener('click', function(e) {
  e.preventDefault();
  authModal.style.display = 'block';
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  
  // Focus on first input of the login form
  loginForm.querySelector('input').focus();

  if (hamburger && mobileMenu) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

// Close modal
closeModalBtn.addEventListener('click', function() {
  authModal.style.display = 'none';
  openAuthModal.focus(); // Return focus to the open button
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  if (event.target === authModal) {
    authModal.style.display = 'none';
    openAuthModal.focus(); // Return focus to the open button
  }
});

// Form toggle between login and register
document.querySelectorAll('[data-form-toggle]').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
    
    // Focus on first input of the current form
    (loginForm.style.display === 'block' ? loginForm : registerForm).querySelector('input').focus();
  });
});

// Login form validation
loginForm.addEventListener('submit', function(e) {
  const username = loginForm.querySelector('input[type="text"]');
  const password = loginForm.querySelector('input[type="password"]');
  
  if (!username.value.trim() || !password.value.trim()) {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});

// Register form validation
registerForm.addEventListener('submit', function(e) {
  const username = registerForm.querySelector('input[type="text"]');
  const email = registerForm.querySelector('input[type="email"]');
  const password = registerForm.querySelector('input[type="password"]:nth-child(1)');
  const confirmPassword = registerForm.querySelector('input[type="password"]:nth-child(2)');

  if (!username.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
    e.preventDefault();
    alert("Please fill in all fields.");
  } else if (password.value !== confirmPassword.value) {
    e.preventDefault();
    alert("Passwords do not match.");
  }
});
