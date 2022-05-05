export const letterCapitalizer = (word) => {
  const wordLength = word.length;
  if (wordLength === 0) {
    return "";
  }
  const capitalLetter = word.slice(0, 1).toUpperCase();
  return capitalLetter + word.slice(1, wordLength);
};
