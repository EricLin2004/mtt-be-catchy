var Visa = require('../models/visa');

module.exports = {
  submit: function(req, res, next) {
    var userId = req.params.id;
    var merchantId = req.params.merchant_id;
    var amount = req.body.amount;

    Visa.payMerchant(userId, merchantId, amount, function(err, success) {
      if (err) return res.status(400).send(err);

      res.status(200).end();
    });
  }
};

