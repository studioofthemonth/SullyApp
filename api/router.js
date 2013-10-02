var db = require('../api/data')
  , Teaching = db.Teaching;

module.exports = function(app) {

    // API Routes
    app.get('/api/locations', function(req, res) {
        console.log(db.Locations);
        res.send(db.Locations);
    });

    app.get('/api/teachings', function(req, res) {
        Teaching.find({}, '', function (err, items) {
            if (err) res.send(err);
            else res.send(items);
        });
    });

    app.post('/api/teachings', function(req, res) {
        var teaching = new Teaching({
            acuity: req.body.acuity,
            complaint: req.body.complaint,
            learnerRank: req.body.learner_rank,
            teacherRank: req.body.teacher_rank,
            locationIndex: req.body.location_index,
        });

        teaching.save(function (err, items) {
            if (err) res.send(err);
            else res.send(items);
        });
    });

    app.all('/api/*', function(req, res) {
        res.send('Not a valid endpoint');
    });

    // Frontend Routes
    app.get('*', function(req, res) {
        res.sendfile('index.html');
    });
};