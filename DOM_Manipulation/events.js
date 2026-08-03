document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const greetingOutput = document.getElementById('greetingOutput');

  greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    greetingOutput.textContent = name
      ? `Hello, ${name}!`
      : 'Please enter your name.';
  });
});
