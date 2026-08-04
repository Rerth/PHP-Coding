function focusFirstError(errors, fields) {
  const firstErrorField = Object.keys(errors).find(field => errors[field]);
  if (firstErrorField && fields[firstErrorField]) {
    fields[firstErrorField].focus();
  }
}

function clearErrors(errorContainers) {
  Object.values(errorContainers).forEach(container => {
    container.textContent = '';
  });
}
