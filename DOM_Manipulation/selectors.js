document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');
  const updateBtn = document.getElementById('updateBtn');

  updateBtn.addEventListener('click', () => {
    message.textContent = 'Text updated by DOM manipulation!';
    message.style.color = 'blue';
    message.style.fontWeight = 'bold';
  });
});
