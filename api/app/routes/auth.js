let authController = require('../controllers/authcontroller.js');


module.exports = function (app) {

  app.get('/', authController.home);
  app.post('/api', authController.submit);

};
