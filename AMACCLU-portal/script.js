const modal = document.getElementById('tosModal');
const agreeCheckbox = document.getElementById('agreeTos');
const acceptBtn = document.getElementById('acceptBtn');
const submitBtn = document.getElementById('submitBtn');

// Show modal on page load
window.onload = () => {
  modal.style.display = 'block';
};

// Enable accept button only if checkbox is checked
agreeCheckbox.addEventListener('change', () => {
  acceptBtn.disabled = !agreeCheckbox.checked;
});

// When user clicks accept, close modal and enable submit button
acceptBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  submitBtn.disabled = false;
});

// Example form submit handler
document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted!');
});
