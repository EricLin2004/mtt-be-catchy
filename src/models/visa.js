var staticDB = require('../helpers/statics');

module.exports = function() {
  return {
    DD_ACT: function(userId, merchantId, cb) {
      cb(null, 'Success');
    }
  }
};