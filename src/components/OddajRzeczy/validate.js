export function validate(values) {
  const validateStreet = (street) => {
    return street.trim().length > 2;
  };
  const validateCity = (city) => {
    return city.trim().length > 2;
  };

  const validateZipCode = (postCode) => {
    let postCodeLength = 5;
    let toNumber = Number(postCode);
    return !(postCode.length !== postCodeLength || isNaN(toNumber));
  };

  const validatePhone = (phoneNumber) => {
    let phoneNumberLength = 9;
    let toNumber = Number(phoneNumber);
    return !(phoneNumber.length !== phoneNumberLength || isNaN(toNumber));
  };

  const errorDataMessages = {};
  const { street, city, postCode, phone } = values;

  if (
    !validateStreet(street) ||
    !validateCity(city) ||
    !validateZipCode(postCode) ||
    !validatePhone(phone)
  ) {
    errorDataMessages.error = "Podane dane są niepoprawne";
  }

  return Object.keys(errorDataMessages).length > 0 ? errorDataMessages : null;
}
