var pg = require('pg');

module.exports = function() {
  return {
    get: function(id, cb) {
      pg.connect(db, function(err, client, done) {
        if(err) {
          return console.error('error fetching client from pool', err);
        }

        var sqlQuery = 'SELECT * FROM users WHERE id = $1';
        client.query(sqlQuery, [id], function(qErr, qResult) {
          done();

          if (qErr) {
            cb('No user with id: ' + id, null);
          } else {
            cb(null, qResult.rows);
          }
        });
      });
  }
};