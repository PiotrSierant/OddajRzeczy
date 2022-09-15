export function validate(values) {
  const errorMessages = {};

  if (values.email.length <= 2) {
    errorMessages.email = "musi byc dłuższy niż 2 znaki";
  }

  if (!values.email.includes("@")) {
    errorMessages.email = "email musi zawierać znak @";
  }

  if (values.password.length <= 4) {
    errorMessages.password = "musi być dłuższy niż 4 znaki";
  }

  return Object.keys(errorMessages).length > 0 ? errorMessages : null;
}
