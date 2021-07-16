export const calculateStarsToColor = (imdbScore) => {
  const result = Math.round(imdbScore / 2);
  return result;
}