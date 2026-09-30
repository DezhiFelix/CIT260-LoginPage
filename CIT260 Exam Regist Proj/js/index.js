
// POP-UP WELCOME WHEN YOU JOIN THE PAGE
document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to CSN Exam Registration Page, Please Login to Continue!');
});

// PASSWORD SHOW OR HIDE TOGGLE SCRIPT
document.addEventListener('DOMContentLoaded', () => {
    const passInput = document.getElementById('password');
    const toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', () => {
        const isPassword = passInput.type === 'password';
        passInput.type = isPassword ? 'text' : 'password';
        toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
});