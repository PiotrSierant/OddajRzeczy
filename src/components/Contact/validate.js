export function validate(values) {
  const validateName = (name) => {
    if (name.trim().split(" ").length > 1) {
      return false;
    }
    const regex = /^[a-zA-Z ]{3,30}$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  const validateMessage = (message) => {
    const minimalLengthMessage = 120;
    return message.length > minimalLengthMessage;
  };

  const errorFormMessages = {};
  const { name, email, message } = values;

  if (
    !validateName(name) ||
    !validateEmail(email) ||
    !validateMessage(message)
  ) {
    errorFormMessages.error =
      "Wprowadź poprawne dane(Imie powinno być jednym wyrazem, wiadomość powinna mieć minimum 120 znaków";
  }

  return Object.keys(errorFormMessages).length > 0 ? errorFormMessages : null;
}
