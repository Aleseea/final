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
    /*var params = [req.params.pattern_id, req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];*/
    
    var pattern_id = req.params.id;
    
    console.log('I have requested one pattern with the id of: ' + pattern_id);
    
    patternModel.getOnePattern(pattern_id, function(err, results){
        
        console.log('I got back here with: ' + results);
        
        var checkResults = JSON.stringify(results);
        
        console.log('This is the stuff from second objects: ' + checkResults);
        
       res.json(results);
    });
}
    
function showUpdateForm(req, res){
    
    var pattern_id = req.params.id;
    
    console.log('I have the ID for the specified pattern: ' + pattern_id);
    
    patternModel.displayUpdateForm(pattern_id, function(err, results){
        
        var checkResults = JSON.stringify(results);
        
        console.log('Back here with stuff: ' + checkResults);
        
       res.json(results);
    });
}

function createNewPattern(req, res){
    console.log('Creating the new pattern!!!');
    /*var params = [req.params.pattern_id, req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];*/
    
    var pattern_name = req.params.pattern_name;
    var author_name = req.params.author_name;
    var image_url = req.params.image_url;
    var instructions  = req.params.instructions;
    
    console.log('I am creating a pattern with these attributes: ' + pattern_name + ", " + author_name + ", " + image_url + ", " + instructions);
    
    patternModel.createANewPattern(pattern_name, author_name, image_url, instructions, function(err, results){
        
        console.log('I got back here with: ' + results);
        
        var checkResults = JSON.stringify(results);
        
        console.log('This is the stuff from second objects: ' + checkResults);
        
       res.json(results);
    });
}

module.exports = {
    allPatterns: allPatterns,
    onePattern: onePattern,
    showUpdateForm: showUpdateForm,
    createNewPattern: createNewPattern
}