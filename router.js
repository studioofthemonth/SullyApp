var db = require('./data')
  , Teaching = db.Teaching;

module.exports = function(app) {

    // API Routes
    app.get('/api/locations', function(req, res) {
        console.log(db.Locations);
        res.send(db.Locations);
    });

    app.put('/api/teaching', function(req, res) {
        var teaching = new Teaching();
        teaching.acuity = this.params.acuity;
        teaching.complaint = this.params.complaint; 
        teaching.learnerRank = this.params.learnerRank; 
        teaching.teacherRank = this.params.teacherRank; 
        teaching.locationIndex = this.params.locationIndex;

        product.save(function (err, items, count) {
            if (err) console.log(err);
            else res.send(items);
        })
    });

    app.get('/api/teaching', function(req, res) {
        var teaching = new Teaching();
        teaching.complaint = 'Shit sucked ass yo!'; 
        teaching.learnerRank = 3; 
        teaching.teacherRank = 5; 
        teaching.locationIndex = 100;

        teaching.save(function (err, items) {
            if (err) res.send(err);
            else res.send(items);
        })
    });

    // Frontend Routes
    app.get('*', function(req, res) {
        res.sendfile('index.html');
    });
};