const form = document.getElementById('register-form');
const message = document.getElementById('message');
const slots = document.querySelectorAll('.slot:not(:disabled)');
const dateInput = document.getElementById('date');
const dialog = document.getElementById('confirm-dialog');
let pending = null;
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

document.getElementById('dialog-no').addEventListener('click', () => dialog.close());

document.getElementById('dialog-yes').addEventListener('click', () => {
  // Replace with your real request first if you save to a backend
  sessionStorage.setItem('registration', JSON.stringify(pending));
  window.location.href = '/confirmation/';
});

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

    // inside the submit handler, after validation passes:
    pending = {
    course, campus,
    date: new Date(date + 'T00:00:00').toLocaleDateString('en-US'),
    slot: selectedSlot
    };
    document.getElementById('sum-course').textContent = pending.course;
    document.getElementById('sum-campus').textContent = pending.campus;
    document.getElementById('sum-date').textContent = pending.date;
    document.getElementById('sum-slot').textContent = pending.slot;
    dialog.showModal();
});