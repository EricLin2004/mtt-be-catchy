var staticDB = require('../helpers/statics');

module.exports = function() {
  return {
    get: function(id, cb) {
      var user = staticDB.filter(function(el) {
        return el.id === id;
      })[0];

      cb(null, user);
    }
  }
};