export const formatAge = (value: string, age: string) => {
  const res = value.replace("{age}", age);
  return res;
};
