var Visa = require('../models/visa')();

module.exports = {
  submit: function(req, res, next) {
    var userId = req.params.id;
    var merchantId = req.params.merchant_id;

    Visa.DD_ACT(userId, merchantId, function(err, user) {

    });
  }
};

