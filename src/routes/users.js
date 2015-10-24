var User = require('../models/user')();

module.exports = {
  get: function(req, res, next) {
    var userId = req.params.id;

    User.get(userId, function(err, user) {
      delete user.cardOnFile;

      res.json(user);
    });
  }
};

