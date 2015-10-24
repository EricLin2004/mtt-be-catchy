var User = require('../models/user')();

module.exports = {
  get: function(req, res, next) {
    var userId = req.params.id;

    User.get(userId, function(err, user) {
      res.json(user);
    });
  }
};

