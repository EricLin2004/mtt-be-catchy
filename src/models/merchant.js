var pg = require('pg');
var db = require('../helpers/config').db;

module.exports = {
  get: function(id, cb) {
    pg.connect(db, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      var sqlQuery = 'SELECT * FROM merchants WHERE id = $1';
      client.query(sqlQuery, [id], function(qErr, qResult) {
        done();

        if (qErr) {
          cb('No merchant with id: ' + id, null);
        } else {
          cb(null, qResult.rows[0]);
        }
      });
    });
  }
};