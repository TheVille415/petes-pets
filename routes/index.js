const Pet = require('../models/pet');

module.exports = (app) => {

  /* GET home page. */
  // changing this to a pagination version
  app.get('/', (req, res) => {
    Pet.paginate().then((results) => {
      res.render('pets-index', { pets: results.docs });    
    });
  });
}
// with this we are now limiting how many results we are getting on each page