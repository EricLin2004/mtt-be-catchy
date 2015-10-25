var VisaClient = require('beta-rest-sdk-nodejs');
var User = require('./user');
var Merchant = require('./merchant');

module.exports = function() {
  return {
    payMerchant: function(userId, merchantId, cb) {
      Merchant.get(merchantId, function(err, merchant) {
        var options = {
            apikey: '<apikey>', //replace with your apikey
            secretKey: '<secretkey>', //replace with your secrekey
            domain: 'https://sandbox.api.visa.com/cybersource' //url
        };

        var restClient = new VisaClient(options);
      });
    }
  };
};