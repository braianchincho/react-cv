export const formatNumber = (n) => {
  return n < 9 ? `0${n}` : `${n}`;
};
export const formatDate = (date) => {
  if (!date || !(date instanceof Date)) {
    return null;
  }
  return date.toISOString().split('T')[0];
};
