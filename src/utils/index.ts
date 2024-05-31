export const validateEmail = (mail) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
};

export function removeSpecialCharacters(str) {
  str = str.normalize("NFD");
  return str.replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
