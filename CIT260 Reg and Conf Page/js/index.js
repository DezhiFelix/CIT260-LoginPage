const form = document.getElementById('Register-form');
const message = document.getElementById('message');
const slots = document.querySelectorAll('.slot:not(:disabled)');
const dateInput = document.getElementById('date');
let selectedSlot = null;

// Disable Past dates
dateInput.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]

// Adds EventListener to every Date Slot with a Loop
slots.forEach(btn => {
    btn.addEventListener('click', () => {

        // Resets each slot to false so no clicks are detected, when clicked: set to true and saves the textcontent into a variable
        slots.forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        selectedSlot = btn.textContent;
        setMessage('');
    });
});

function setMessage(text, type) {
    message.textContent = text;
    message.className = 'message' + (type ? ' ' + type : '');
}

form.addEventListener('submit', e => {
    e.preventDefault();

    // Capture value from the form when user options are selected
    const course = form.course.value;
    const campus = form.campus.value;
    const date = form.date.value;

    // error messages if any of these data are not selected
    if (!course) return setMessage('Select a course or exam type.', 'error');
    if (!campus) return setMessage('Select a campus.', 'error');
    if (!date) return setMessage('Choose an exam date.', 'error');
    if (!selectedSlot) return setMessage('Choose an available time slot.', 'error');

    // Place holder for confirmation message
    setMessage('Registered for ' + course + ' on ' + date + ' at ' + selectedSlot + '.', 'success');
});