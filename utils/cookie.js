export const setCookie = (name, value, expiresInHours) => {
  const date = new Date();
  date.setTime(date.getTime() + expiresInHours * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const getCookie = (name) => {
  if (typeof document !== 'undefined') {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  return null;
};
