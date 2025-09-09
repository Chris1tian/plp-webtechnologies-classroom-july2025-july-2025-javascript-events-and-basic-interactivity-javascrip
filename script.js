// script.js

// --- Light/Dark Mode Toggle ---
const toggleModeBtn = document.getElementById('toggle-mode');
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// --- Counter Feature ---
let counter = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

incrementBtn.addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
  counter--;
  counterValue.textContent = counter;
});

// --- FAQ Section (Collapsible) ---
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
  q.addEventListener('click', () => {
    // Toggle active class for the clicked question
    q.classList.toggle('active');
    // Hide other answers
    faqQuestions.forEach(otherQ => {
      if (otherQ !== q) otherQ.classList.remove('active');
    });
  });
});

// --- Form Validation ---
const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Helper validation functions
function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  // At least 6 chars, one number, one letter
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

// Real-time validation
nameInput.addEventListener('input', () => {
  if (!validateName(nameInput.value)) {
    nameError.textContent = "Name must be at least 2 characters.";
  } else {
    nameError.textContent = "";
  }
});

emailInput.addEventListener('input', () => {
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener('input', () => {
  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = "Password must be 6+ chars, include a letter and a number.";
  } else {
    passwordError.textContent = "";
  }
});

// On form submit
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Name validation
  if (!validateName(nameInput.value)) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = "Password must be 6+ chars, include a letter and a number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Show success or error
  if (valid) {
    formSuccess.textContent = "Sign up successful! 🎉";
    signupForm.reset();
    setTimeout(() => { formSuccess.textContent = ""; }, 3000);
  } else {
    formSuccess.textContent = "";
  }
});