var User = require('../models/user');

module.exports = {
  get: function(req, res, next) {
    var userId = req.params.id;

    User.get(userId, function(err, user) {
      delete user.credit_card_number;
      delete user.credit_expiration_month;
      delete user.credit_expiration_year;

      res.json(user);
    });
  }
};

