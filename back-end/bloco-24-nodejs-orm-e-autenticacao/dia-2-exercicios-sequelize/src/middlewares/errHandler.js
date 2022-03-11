function errHandler(err, req, res, next) {
  console.log(err);
  return res.status(500).json({message: 'ocorreu algum erro'});
}

module.exports = errHandler;
