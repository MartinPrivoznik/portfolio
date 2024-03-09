export const calculateMyAge = () => {
  var today = new Date();
  var birthDate = new Date(2000, 8, 20);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age.toString();
};
