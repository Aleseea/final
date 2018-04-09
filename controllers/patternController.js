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

function allCategories(req, res){
    console.log('Pulling up all categories....');
    
    //var pattern_id = req.query.pattern_id;
    
    console.log('I have requested all categories');
    
    patternModel.getAllCategories(function(err, results){
        if (err) {
            console.error(err);
        }
        
        console.log('I got back here with: ' + results);
        
        var checkResults = JSON.stringify(results);
        
        console.log('This is the stuff from second objects: ' + checkResults);
        
       res.status(200).json(results);
    });
}

function oneCategory(req, res){
    console.log('Pulling up one category...');
    /*var params = [req.params.pattern_id, req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];*/
    
    var category_id = req.params.id;
    
    console.log('I have requested one category with the id of: ' + category_id);
    
    patternModel.getOneCategory(category_id, function(err, results){
        
        console.log('I got back here with: ' + results);
        
        var checkResults = JSON.stringify(results);
        
        console.log('This is the stuff from second objects: ' + checkResults);
        
       res.json(results);
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

function updateAPattern(req, res){
    console.log('Updating the pattern!!!');
    /*var params = [req.params.pattern_id, req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];*/
    
    var pattern_id = req.params.pattern_id;
    var pattern_name = req.params.pattern_name;
    var author_name = req.params.author_name;
    var image_url = req.params.image_url;
    var instructions  = req.params.instructions;
    
    console.log('I am updating a pattern with these attributes: ' + pattern_id + ', ' + pattern_name + ", " + author_name + ", " + image_url + ", " + instructions);
    
    patternModel.updatingOldPattern(pattern_id, pattern_name, author_name, image_url, instructions, function(err, results){
        
        console.log('I got back here with: ' + results);
        
        var checkResults = JSON.stringify(results);
        
        console.log('This is the stuff from second objects: ' + checkResults);
        
       res.json(results);
    });
}

function deleteAPattern(req, res){
    console.log('Deleting the pattern!!!');
    /*var params = [req.params.pattern_id, req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];*/
    
    var pattern_id = req.params.pattern_id;
    
    console.log('I am deleting a pattern with this attribute: ' + pattern_id);
    
    patternModel.deletingOldPattern(pattern_id, function(err, results){
        
        console.log('I got back here with: ' + results);
        
        var checkResults = JSON.stringify(results);
        
        console.log('There should be nothing here: ' + checkResults);
        
       res.json(results);
    });
}

module.exports = {
    allPatterns: allPatterns,
    allCategories: allCategories,
    oneCategory: oneCategory,
    onePattern: onePattern,
    showUpdateForm: showUpdateForm,
    createNewPattern: createNewPattern,
    updateAPattern: updateAPattern,
    deleteAPattern: deleteAPattern
}