var VisaClient = require('beta-rest-sdk-nodejs');
var User = require('./user');
var Merchant = require('./merchant');

module.exports = {
  payMerchant: function(userId, merchantId, cb) {
    Merchant.get(merchantId, function(err, merchant) {
      User.get(userId, function(err, user) {
        var options = {
          apikey: merchant.api_key,
          secretKey: merchant.shared_secret,
          domain: 'https://sandbox.api.visa.com/cybersource'
        };

        var restClient = new VisaClient(options);

        var req = {
          AuthCaptureRequest: {
            amount: "100.00",
            currency: "USD",
            referenceId: "123",
            payment: {
              cardNumber: user.credit_card_number,
              cardExpirationMonth: user.credit_expiration_month,
              cardExpirationYear: user.credit_expiration_year
            }
          }
        };

        restClient.sale(req)
          .then(function(res) {
            console.log('successful: ', res);
            cb(null, "Successful Transaction.")
          }, function(err) {
            console.log('err: ', err);
            cb(err, null);
          });
      });
    });
  }
};