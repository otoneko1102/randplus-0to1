function random() {
  let result;
  do {
    result = Math.random() + Math.random();
    console.log(result);
  } while (result > 1);
  return result;
}

module.exports = random;
