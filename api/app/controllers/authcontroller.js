var exports = module.exports = {};
var http = require('http');
const url = require('url');
const AUTH_KEY = 'aGVhbHRoY29jb0AxODpINDkwNUhWR0g0OTA1SFZH';

exports.home = (req, res) => {
  res.send("Yes It Is Working");
};

exports.submit = (req, res) => {

  // let city = req.body.city;
  // let expert = req.body.expert;
  let city = 'nagpur';
  let expert = 'dentist';
  const API_URL = 'http://18.223.94.159/dpdocter/api/websearch/doctors?&city='+city+'&expertIn='+expert+'&page=0&size=10';
  let options = url.parse(API_URL);
  let buffer = new Buffer(AUTH_KEY, 'base64');
  options['auth'] = buffer.toString();

  var doc = '';
  http.get(options, (resApi) => {

    console.log('statusCode:', resApi.statusCode);
    console.log('headers:', resApi.headers);

    var body = '';
    resApi.on('data', (data) => {
      body += data;
    });

    resApi.on('end', ()=>{
      var str = body.toString('utf8');
      doc += JSON.parse(JSON.stringify(str));
      // console.log("Doctors Data", doc);
      res.send(doc);
    });

  }).on('error', (e) => {
    console.error(e);
  });

};
