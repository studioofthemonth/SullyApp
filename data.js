var mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost/sullyapp');

// Setup static locations
var locations = exports.Locations = [
    { name: 'Bed 1', type: 'bed' },  
    { name: 'Bed 2', type: 'bed' }, 
    { name: 'Big Hallway', type: 'hallway' }, 
    { name: 'Computer 1', type: 'workstation' }, 
    { name: 'Computer 2', type: 'workstation' }
];

// Create Teaching Model 
var TeachingSchema = new mongoose.Schema({
    acuity: { type: Number, required: true },
    complaint: String,
    learnerRank: { type: Number, required: true },
    teacherRank: { type: Number, required: true },
    locationIndex: { type: Number, required: true } 
});

exports.Teaching = mongoose.model('Teaching', TeachingSchema);