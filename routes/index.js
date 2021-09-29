const Pet = require('../models/pet');

module.exports = (app) => {

  app.get('/', (req, res) => {
    const page = req.query.page || 1

    Pet.paginate({}, { page: page }).then((results) => {
      // If the request is JSON, we want to send a JSON response
      if (req.header('Content-Type') == 'application/json') {
        return res.json({ pets: results.docs, pagesCount: results.pages, currentPage: page });
      // Otherwise we do what we did before
      } else {
        res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page });
      }
    });
  });
}
// with this we are now limiting how many results we are getting on each page
// with this next version we are able to access each page with 3 results per page