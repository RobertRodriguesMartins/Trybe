const errors = {
  invalidData: 404,
  emptyField: 400,
  notFound: 404,
  ER_DUP_ENTRY: 400
}

function err({error}, req, res, next){
  return res.status(errors[error.code] || 500).json(error);
}

module.exports = {
  err
};
