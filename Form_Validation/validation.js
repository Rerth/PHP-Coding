function validateRequired(value, label) {
  if (!value) {
    return `${label} is required.`;
  }
  return '';
}

function validateEmail(value) {
  if (!value) {
    return 'Email is required.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    return 'Email must be a valid address.';
  }

  return '';
}

function validatePassword(value) {
  if (!value) {
    return 'Password is required.';
  }

  if (value.length < 6) {
    return 'Password must be at least 6 characters long.';
  }

  return '';
}

function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return 'Confirm Password is required.';
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match.';
  }

  return '';
}
