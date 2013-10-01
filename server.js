var express = require('express')
  , app = express()
  , mongoose = require('mongoose')
  ;

mongoose.connect('mongodb://localhost/sullyapp');

app.configure(function () {
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use('/static', express.static(__dirname + '/frontend'));
});

// Create Data
var locations = [
    { name: 'Bed 1', type: 'bed' },  
    { name: 'Bed 2', type: 'bed' }, 
    { name: 'Big Hallway', type: 'hallway' }, 
    { name: 'Computer 1', type: 'workstation' }, 
    { name: 'Computer 2', type: 'workstation' }
];

var Schema = mongoose.Schema;

var teachingSchema = new Schema({
    acuity: Number,
    complaint: String,
    learnerRank: Number,
    teacherRank: Number,
    locationIndex: Number 
});

// API Routes
app.get('/api/locations', function(req, res) {
    res.send(locations);
});

app.put('/api/teaching', function(req, res) {
    res.send(locations);
});



app.get('*', function(req, res) {
    res.sendfile('index.html');
});

app.listen(3000);
console.log('Listening on port 3000');