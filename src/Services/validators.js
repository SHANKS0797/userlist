export const validateEmail = (email) => {
  if (email.trim().length <= 0) {
    return 0;
  } else {
    return /\S+@\S+\.\S+/.test(email);
  }
};

export const validatePassword = (password) => {
  if (password.trim().length <= 8) {
    return 0;
  } else {
    return /\S+@\S+\.\S+/.test(password);
  }
};

export const validateInput = (value) => {
  if (value.trim().length < 1) {
    return false;
  } else {
    return true;
  }
};
