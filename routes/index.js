const Pet = require('../models/pet');

module.exports = (app) => {

  /* GET home page. */
  // changing this to a pagination version
  app.get('/', (req, res) => {
    const page = req.query.page || 1
  
    Pet.paginate({}, {page: page}).then((results) => {
      res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page });    
    });
  });
  
}
// with this we are now limiting how many results we are getting on each page
// with this next version we are able to access each page with 3 results per page