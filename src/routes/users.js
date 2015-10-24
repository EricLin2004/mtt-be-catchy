var User = require('../models/user')();

module.exports = {
  getApplication: function(req, res, next) {
    var applicationId = ridConverter(req.params.id)

    Application.get(applicationId, function(err, application) {
      if (err) return res.status(400).json(err);
      if (!application || application.length === 0) return res.status(404).end();

      res.status(200).json(application);
    });
  },
  getApplications: function(req, res, next) {
    var showJobs = req.query.jobs;

    Application.getAll(showJobs, function(err, applications) {
      if (err) return res.status(400).json(err);

      res.status(200).json(applications);
    });
  },
  updateApplication: function(req, res, next) {
    var application = req.body;
    application.id = ridConverter(req.params['id']);

    if ((!application.score && !application.status) ||
        (application.score && application.status) ||
        (application.status && application.status !== 'pending')) return res.status(400).json(errorHelper.API.application.update);

    if (application.status) {
      Application.update(application, function(aErr, aResult) {
        if (aErr) return res.status(400).json(aErr);

        Application.get(application.id, function(appErr, appRes) {
          if (appErr) {
            res.status(400).end();
          } else {
            res.status(200).json(appRes);
          }
        });
      });
    } else if (application.score) {
      // Score.add performs transactions to create Score, Rejection vertexes and edges when necessary
      Score.add(req.user, application, function(scoreErr) {
        if (scoreErr) {
          res.status(400).send(scoreErr);
        } else {
          if (application.score > 5 && process.env.NODE_ENV !== 'test') {
            Application.sendToGithub(application.id, function(ghErr, ghRes) {
              if (ghErr) {
                res.status(500).json(ghErr);
              } else {
                Application.get(application.id, function(appErr, appRes) {
                  if (appErr) {
                    res.status(400).end();
                  } else {
                    res.status(200).json(appRes);
                  }
                });
              }
            });
          } else {
            Application.get(application.id, function(appErr, appRes) {
              if (appErr) {
                res.status(400).end();
              } else {
                res.status(200).json(appRes);
              }
            });
          }
        }
      });
    }
  },
  getPositions: function(req, res, next) {
    Application.getPositions(function(err, jobs) {
      if (err) return res.status(400).json(err);

      res.status(200).json(jobs);
    });
  }
};

