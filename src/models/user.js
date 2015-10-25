var pg = require('pg');
var db = require('../helpers/config').db;

module.exports = {
  get: function(id, cb) {
    pg.connect(db, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      var sqlQuery = 'SELECT u.*, (SELECT to_json(array_agg(merc)) as merchants FROM \
        (SELECT m.*, to_json(array_agg(DISTINCT r.*)) as rewards, to_json(array_agg(DISTINCT us.*)) as stars \
        FROM merchants m \
        JOIN user_stars us ON us.merchant_id = m.id AND us.user_id = $1 \
        JOIN rewards r ON r.merchant_id = m.id \
        GROUP BY m.id) as merc) FROM users u';
      client.query(sqlQuery, [id], function(qErr, qResult) {
        done();

        var user = qResult.rows[0];

        user.merchants.forEach(function(merc) {
          delete merc.api_key;
          delete merc.shared_secret;

          merc.stars.sort(function(a,b) {
            return a.created_at > b.created_at
          });
        });

        if (qErr) {
          cb('No user with id: ' + id, null);
        } else {
          cb(null, qResult.rows[0]);
        }
      });
    });
  }
};