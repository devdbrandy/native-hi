export const isValidEmail = (email: string) => {
  // eslint-disable-next-line prettier/prettier
  const validEmailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!email || !email.match(validEmailPattern)) {
    return false;
  }

  return true;
};

export const isValidPassword = (password: string) => {
  if (!password || password.trim().length < 6) {
    return false;
  }

  return true;
};
