function random() {
  let result = Math.random();
  if (Math.random() == 0) result = 1;
  return result;
}
module.exports = random;
