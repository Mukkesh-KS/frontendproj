const userIds = [];
const userPasswords = {};
const userDetails = {};

const userIdInput = document.getElementById('userid');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginbtn');
const signupBtn = document.getElementById('signupbtn');
const message = document.getElementById('message');

const signupPopup = document.getElementById('signupPopup');
const otpPopup = document.getElementById('otpPopup');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const popupUserId = document.getElementById('popupUserId');
const popupPassword = document.getElementById('popupPassword');
const nextBtn = document.getElementById('nextbtn');

const otpInput = document.getElementById('otpInput');
const verifyOtpBtn = document.getElementById('verifyOtpBtn');

const closeSignupBtn = document.getElementById('closeSignupBtn');
const closeOtpBtn = document.getElementById('closeOtpBtn');

let generatedOtp = '';
let tempUser = {};

function clearInputs() {
  userIdInput.value = '';
  passwordInput.value = '';
}

function clearSignupForm() {
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  popupUserId.value = '';
  popupPassword.value = '';
}

function clearOtpInput() {
  otpInput.value = '';
}

signupBtn.addEventListener('click', () => {
  clearSignupForm();
  signupPopup.style.display = 'flex';
});

nextBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const userId = popupUserId.value.trim();
  const password = popupPassword.value;

  if (!name || !email || !phone || !userId || !password) {
    alert('Please fill all fields.');
    return;
  }

  if (userIds.includes(userId)) {
    alert('User ID already exists. Please choose another.');
    return;
  }

  tempUser = { name, email, phone, userId, password };

  generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
  alert(`OTP sent to ${phone}: ${generatedOtp}`);

  signupPopup.style.display = 'none';

  clearOtpInput();
  otpPopup.style.display = 'flex';
});

verifyOtpBtn.addEventListener('click', () => {
  const enteredOtp = otpInput.value.trim();

  if (enteredOtp === generatedOtp) {
    const { userId, password } = tempUser;
    userIds.push(userId);
    userPasswords[userId] = password;
    userDetails[userId] = tempUser;

    otpPopup.style.display = 'none';
    message.style.color = 'green';
    message.textContent = 'Signup successful! You can now login.';
  } else {
    alert('Incorrect OTP. Try again.');
  }
});

loginBtn.addEventListener('click', () => {
  const userId = userIdInput.value.trim();
  const password = passwordInput.value;

  if (!userId || !password) {
    message.style.color = 'red';
    message.textContent = 'Please enter both User ID and Password.';
    return;
  }

  if (!userIds.includes(userId)) {
    message.style.color = 'red';
    message.textContent = 'User ID not found. Please sign up first.';
  } else if (userPasswords[userId] !== password) {
    message.style.color = 'red';
    message.textContent = 'Incorrect password.';
  } else {
    message.style.color = 'green';
    message.textContent = `Login successful! Welcome, ${userDetails[userId].name}.`;
    clearInputs();
  }
});

// Close popup event listeners
closeSignupBtn.addEventListener('click', () => {
  signupPopup.style.display = 'none';
});

closeOtpBtn.addEventListener('click', () => {
  otpPopup.style.display = 'none';
});
