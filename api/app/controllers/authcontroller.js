var exports = module.exports = {};


exports.home = (req, res) => {

  res.send("Yes It Is Working");

};


exports.submit = (req, res) => {

  console.log(req.body);
  res.send(req.body);

};
