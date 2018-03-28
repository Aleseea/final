var patternModel = require('../models/patternModel.js');

function allPatterns(req, res){
    console.log('Pulling up all patterns....');
    
    //var pattern_id = req.query.pattern_id;
    
    console.log('I have requested all patterns');
    
    patternModel.getAllPatterns(function(err, results){
        if (err) {
            console.error(err);
        }
        
        console.log('I got back here with: ' + results);
        
        var checkResults = JSON.stringify(results);
        
        console.log('This is the stuff from second objects: ' + checkResults);
        
       res.status(200).json(results);
    });
}

function onePattern(req, res){
    console.log('Pulling up one pattern...');
    
    var pattern_id = req.query.pattern_id;
    
    console.log('I have requested all patterns');
    
    patternModel.getAllPatterns(pattern_id, function(err, results){
        
        console.log('I got back here with: ' + results);
        
        var checkResults = JSON.stringify(results);
        
        console.log('This is the stuff from second objects: ' + checkResults);
        
       res.json(results);
    });
}
    


module.exports = {
    allPatterns: allPatterns,
    onePattern: onePattern
}