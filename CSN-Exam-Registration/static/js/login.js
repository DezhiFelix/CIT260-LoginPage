


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