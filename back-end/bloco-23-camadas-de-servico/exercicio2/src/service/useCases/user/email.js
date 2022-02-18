function verifyEmail(email) {
  //it should have at least 6 characters;
  if (email) {
      const rule = new RegExp(/\S+@{1}\S+\.{1}\S+/);
      const ruleResult = rule.test(email);
      if (ruleResult) {
        return true
      } 
      return 'o campo email é inválido!'
  }
  return 'o campo email é obrigatório!';
}

module.exports = verifyEmail;