var apiTokens = require('../helpers/config').apiTokens;

module.exports = function(app) {
  app.use('/v1/*', function() {
    var apiToken = req.headers['x-api-token'];

    if (apiTokens.indexOf(apiToken) > -1) {
      next();
    } else {
      res.status(401).json({
        error: 'Not authorized: Invalid x-api-token header.'
      });
    }
  });

  var User = require('./users');
  app.get('/v1/user/:id', User.get);

  var Visa = require('../models/visa');
}
