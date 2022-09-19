export function validate(values) {
  const { email, password } = values;
  const errorMessages = {};

  const validateEmail = (email) => {
    const regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  if (!validateEmail(email) || password.length <= 4) {
    errorMessages.error = "Wprowadź poprawne dane";
  }

  return Object.keys(errorMessages).length > 0 ? errorMessages : null;
}
