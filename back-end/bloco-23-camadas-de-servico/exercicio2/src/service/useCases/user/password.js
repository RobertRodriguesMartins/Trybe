function verifyPassword(password) {
  //it should have at least 6 characters;
  if (password) {
    if (password.length >= 6) return true;
  }
  return false;
}

module.exports = verifyPassword;
