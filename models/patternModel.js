const{ Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://orange:orange@localhost:5432/postgres';

const pool = new Pool({
    connectionString: connectionString
});


function getAllPatterns(callback){
    pool.query('SELECT pattern_name, pattern_id FROM pattern', function(err, res){
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

module.exports = {
    getAllPatterns: getAllPatterns,
    getOnePattern: getOnePattern,
    displayUpdateForm: displayUpdateForm,
    createANewPattern: createANewPattern
}