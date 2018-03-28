const{ Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://orange:orange@localhost:5432/postgres';

const pool = new Pool({
    connectionString: connectionString
});


function getAllPatterns(callback){
    pool.query('SELECT pattern_name FROM pattern', function(err, res){
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
//module.exports = {show: resultList};

module.exports = {
    getAllPatterns: getAllPatterns
}