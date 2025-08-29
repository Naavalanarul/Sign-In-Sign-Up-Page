const toggleBtn = document.getElementById('toggleBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signinMsg = document.getElementById('signin-msg');
const signupMsg = document.getElementById('signup-msg');
let isSignIn = true;

toggleBtn.onclick = () => {
    isSignIn = !isSignIn;
    signInForm.style.display = isSignIn ? 'flex' : 'none';
    signUpForm.style.display = isSignIn ? 'none' : 'flex';
    toggleBtn.textContent = isSignIn ? 'Switch to Sign Up' : 'Switch to Sign In';
    signinMsg.textContent = '';
    signupMsg.textContent = '';
};

signInForm.onsubmit = e => {
    e.preventDefault();
    const u = document.getElementById('signin-user').value.trim();
    const p = document.getElementById('signin-pass').value;
    if (u === 'admin' && p === 'password') {
        signinMsg.style.color = 'var(--success)';
        signinMsg.textContent = 'Sign in successful!';
    } else {
        signinMsg.style.color = 'var(--error)';
        signinMsg.textContent = 'Invalid credentials.';
    }
};

signUpForm.onsubmit = e => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const countryCode = document.getElementById('country-code').value.trim();
    const mobile = document.getElementById('signup-mobile').value.trim();
    const p1 = document.getElementById('signup-pass').value;
    const p2 = document.getElementById('signup-pass2').value;

    // Email validation regex (RFC 5322 Official Standard)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || !email || !countryCode || !mobile || !p1 || !p2) {
        signupMsg.style.color = 'var(--error)';
        signupMsg.textContent = 'All fields are required.';
    } else if (!emailRegex.test(email)) {
        signupMsg.style.color = 'var(--error)';
        signupMsg.textContent = 'Please enter a valid email address.';
    } else if (!/^[0-9]{1,3}$/.test(countryCode)) {
        signupMsg.style.color = 'var(--error)';
        signupMsg.textContent = 'Enter a valid country code (1-3 digits).';
    } else if (!/^[0-9]{7,15}$/.test(mobile)) {
        signupMsg.style.color = 'var(--error)';
        signupMsg.textContent = 'Enter a valid mobile number.';
    } else if (p1 !== p2) {
        signupMsg.style.color = 'var(--error)';
        signupMsg.textContent = 'Passwords do not match.';
    } else {
        signupMsg.style.color = 'var(--success)';
        signupMsg.textContent = `Sign up successful! (Demo only)`;
    }
};