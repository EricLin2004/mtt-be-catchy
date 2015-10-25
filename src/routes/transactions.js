var Visa = require('../models/visa');

module.exports = {
  submit: function(req, res, next) {
    var userId = req.params.id;
    var merchantId = req.params.merchant_id;

    Visa.payMerchant(userId, merchantId, function(err, success) {
      if (err) return res.status(400).send(err);

      res.status(200).end();
    });
  }
};

