function verifyfirstName(firstName) {
  //it should have at least 6 characters;
  if (firstName) {
    if (firstName.length >= 6) return true;
  }
  return false;
}

module.exports = verifyfirstName;