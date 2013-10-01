var db = require('./data')
  , Teaching = db.Teaching;

module.exports = function(app) {

    // API Routes
    app.get('/api/locations', function(req, res) {
        console.log(db.Locations);
        res.send(db.Locations);
    });

    app.post('/api/teachings', function(req, res) {
        console.log(req.body);

        var teaching = new Teaching();
        teaching.acuity = req.body.acuity;
        teaching.complaint = req.body.complaint; 
        teaching.learnerRank = req.body.learner_rank; 
        teaching.teacherRank = req.body.teacher_rank; 
        teaching.locationIndex = req.body.location_index;

        teaching.save(function (err, items, count) {
            if (err) res.send(err);
            else res.send(items);
        })
    });

    app.get('/api/teachings', function(req, res) {
        
    });

    app.all('/api/*', function(req, res) {
        res.send('Not a valid endpoint');
    });

    // Frontend Routes
    app.get('*', function(req, res) {
        res.sendfile('index.html');
    });
};