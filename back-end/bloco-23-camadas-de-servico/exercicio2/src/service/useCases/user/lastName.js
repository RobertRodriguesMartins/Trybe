function verifylastName(lastName) {
  //it should have at least 6 characters;
  if (lastName) {
    if (lastName.length >= 6) return true;
  }
  return false;
}

module.exports = verifylastName;