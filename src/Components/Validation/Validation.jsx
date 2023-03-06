
const validateEmail = ({ email, setEmailError }) => {
    const emailRegular =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegular)
      ? setEmailError('Email no válido')
      : setEmailError('');
};

  const validateFullName = ({ fullName, setFullNameError }) => {
    return fullName && fullName.length < 5
      ? setFullNameError('Debe ingresar su nombre completo')
      : fullName && fullName.length > 50
      ? setFullNameError('Try to make short and meanfull')
      : setFullNameError('');
};
  
  const validateMessage = ({ message, setMessageError }) => {
    return message && message.length < 5
      ? setMessageError('El mensaje es muy corto')
      : message && message.length > 700
      ? setMessageError('Mensaje muy largo')
      : setMessageError('');
};
  
export { validateEmail, validateFullName, validateMessage };