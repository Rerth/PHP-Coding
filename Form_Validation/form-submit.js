document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const result = document.getElementById('result');

  const fields = {
    username: document.getElementById('username'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
  };

  const errorContainers = {
    username: document.getElementById('usernameError'),
    email: document.getElementById('emailError'),
    password: document.getElementById('passwordError'),
    confirmPassword: document.getElementById('confirmPasswordError'),
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    result.textContent = '';

    const values = {
      username: fields.username.value.trim(),
      email: fields.email.value.trim(),
      password: fields.password.value,
      confirmPassword: fields.confirmPassword.value,
    };

    const errors = {
      username: validateRequired(values.username, 'Username'),
      email: validateEmail(values.email),
      password: validatePassword(values.password),
      confirmPassword: validateConfirmPassword(values.password, values.confirmPassword),
    };

    const isValid = Object.values(errors).every(error => !error);

    Object.entries(errorContainers).forEach(([field, container]) => {
      container.textContent = errors[field] || '';
    });

    if (!isValid) {
      focusFirstError(errors, fields);
      return;
    }

    const capture = {
      username: values.username,
      email: values.email,
      password: '•••••••',
    };

    result.textContent = `Form submitted successfully: ${JSON.stringify(capture)}`;
    form.reset();
  });
});
