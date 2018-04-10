const{ Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://orange:orange@localhost:5432/postgres';

const pool = new Pool({
    connectionString: connectionString
});


function getAllPatterns(callback){
    pool.query('SELECT pattern_name, pattern_id, image_url FROM pattern', function(err, res){
        if (err){
            throw err;
        } else{
            console.log('Back from the database with: ' + res.rows);
            
            var checkResults = JSON.stringify(res.rows);
            
            console.log('This is the stuff from the objects: ' + checkResults);
            
            var results = {
                status: 'success',
                list: res.rows
            };
            
            callback(null, results);
        }
    })
}

function getAllCategories(callback){
    pool.query('SELECT category_name, category_id FROM category', function(err, res){
        if (err){
            throw err;
        } else{
            console.log('Back from the database with: ' + res.rows);
            
            var checkResults = JSON.stringify(res.rows);
            
            console.log('This is the stuff from the objects: ' + checkResults);
            
            var results = {
                status: 'success',
                list: res.rows
            };
            
            callback(null, results);
        }
    })
}

function getOneCategory(id, callback){
    console.log("did the id come through? " + id);
    pool.query("SELECT * FROM pattern p INNER JOIN type t ON p.pattern_id = t.pattern_id INNER JOIN category c ON t.category_id = c.category_id WHERE c.category_id = " + id, function(err, res){
        if (err){
            throw err;
        } else{
            console.log('Back from the database with: ' + res.rows);
            
            var checkResults = JSON.stringify(res.rows);
            
            console.log('This is the stuff from the objects: ' + checkResults);
            
            var results = {
                status: 'success',
                list: res.rows
            };
            
            callback(null, results);
        }
    })
}

function getOnePattern(id, callback){
    console.log("did the id come through? " + id);
    pool.query("SELECT * FROM pattern WHERE pattern_id = " + id, function(err, res){
        if (err){
            throw err;
        } else{
            console.log('Back from the database with: ' + res.rows);
            
            var checkResults = JSON.stringify(res.rows);
            
            console.log('This is the stuff from the objects: ' + checkResults);
            
            var results = {
                status: 'success',
                list: res.rows
            };
            
            callback(null, results);
        }
    })
}

function displayUpdateForm(id, callback){
    console.log("The id again for the update: " + id);
    pool.query("SELECT * FROM pattern WHERE pattern_id = " + id, function(err, res){
        if (err){
            throw err;
        } else{
            console.log('Back from the database with ' + res.rows + ' objects.');
            
            var checkResults = JSON.stringify(res.rows);
            
            console.log('This is the stuff from the objects: ' + checkResults + ' as the info needing to be updated.');
            
            var results = {
                status: 'success',
                list: res.rows
            };
            
            callback(null, results);
        }
    })
}

function createANewPattern(patternName, authorName, imageUrl, instructions, callback){
    console.log("These are the things that came through: " + patternName + ", " + authorName + ", " + imageUrl + ", " + instructions);
    
    pool.query('INSERT INTO pattern (pattern_name, author_name, image_url, instructions) VALUES ($1, $2, $3, $4)', [ patternName, authorName, imageUrl, instructions ], function(err, res){
        
        if (err){
            throw err;
        } else{
            console.log('The insert into the database worked!');
            
            var results = {
                status: 'success'
            };
            
            callback(null, results);
        }
    });
}

function updatingOldPattern(patternId, patternName, authorName, imageUrl, instructions, callback){
    console.log("These are the things that came through: " + patternId + ", " + patternName + ", " + authorName + ", " + imageUrl + ", " + instructions);
    
    /*"UPDATE pattern SET pattern_name = $2, author_name = $3, image_url = $4, instructions = $5 WHERE pattern_id = $1";*/
    
    pool.query('UPDATE pattern SET pattern_name = $2, author_name = $3, image_url = $4, instructions = $5 WHERE pattern_id = $1', [ patternId, patternName, authorName, imageUrl, instructions ], function(err, res){
        
        if (err){
            throw err;
        } else{
            console.log('The Update into the database worked!');
            
            var results = {
                status: 'success'
            };
            
            callback(null, results);
        }
    });
}

function deletingOldPattern(patternId, callback){
    console.log("This is the thing that came through: " + patternId);
    
    /*"UPDATE pattern SET pattern_name = $2, author_name = $3, image_url = $4, instructions = $5 WHERE pattern_id = $1";*/
    
    pool.query('DELETE FROM pattern WHERE pattern_id = ' + patternId + ';', function(err, res){
        
        if (err){
            throw err;
        } else{
            console.log('The Delete from the database worked!');
            
            var results = {
                status: 'success'
            };
            
            callback(null, results);
        }
    });
}

module.exports = {
    getAllPatterns: getAllPatterns,
    getAllCategories: getAllCategories,
    getOneCategory: getOneCategory,
    getOnePattern: getOnePattern,
    displayUpdateForm: displayUpdateForm,
    createANewPattern: createANewPattern,
    updatingOldPattern: updatingOldPattern,
    deletingOldPattern: deletingOldPattern
}