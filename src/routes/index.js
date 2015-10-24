var apiTokens = require('../helpers/config').apiTokens;

module.exports = function(app) {
  app.use('/v1/*', function(req, res, next) {
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
  app.get('/v1/users/:id', User.get);

  var Transaction = require('./transactions');
  app.post('/v1/users/:id/pay/:merchant_id', Transaction.submit);
}
