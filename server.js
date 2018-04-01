var express = require('express');
var app = express();

var controller = require('./controllers/patternController.js')

/*var router = express.Router();
console.log("I'm at least in here . . .");
var pg = require('pg');*/

/*This will hopefully connect to the database...*/
/*const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});*/

/*This works now*/
/*var conString = "postgres://orange:orange@localhost:5432/postgres";*/
  
 app.set('port', (process.env.PORT || 5000))
    /*.use(express.json())
    .use(express.urlencoded({extended:true}))*/
    .use(express.static(__dirname + '/public'))
    .get('/allPatterns', controller.allPatterns)
    .get('/onePattern/:id', controller.onePattern)
    .get('/updateForm/:id', controller.showUpdateForm)
    .post('/newPattern/:pattern_name/:author_name/:image_url/:instructions', controller.createNewPattern)
     .post('/updatePattern/:pattern_id/:pattern_name/:author_name/:image_url/:instructions', controller.updateAPattern)


/*For database connection test purposes only*/
    /*.get('/test/:id', testing123)
    .post('/newPattern/:pattern_name/:author_name/:image_url/:instructions', newPattern)
    .post('/test2/:pattern_name/:author_name/:image_url/:instructions', testingOtherStuff)
    .post('/test3/:pattern_id/:pattern_name/:author_name/:image_url/:instructions', testingOnceAgain)
    .post('/updatePattern/:pattern_id/:pattern_name/:author_name/:image_url/:instructions', updatePattern)*/
    .listen(app.get('port'), function(){
        console.log('Listening on port: ' + app.get('port'));
});


/*function newPattern(req, res){
    console.log('Creating new pattern...');
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('ERROR: ', err);
    }
      var statement = "INSERT INTO pattern(pattern_name, author_name, image_url, instructions) VALUES($1, $2, $3, $4) ";
      var params = [req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];
      
      console.log(req);
      console.log(params);
      
      var query = client.query(statement, params, function(err, result) {
        console.log("Queried something");
        client.end(function(err) {
          if (err) {
            return console.error('ERROR: ', err);
          }
        });

        if (err) {
          return console.error('ERROR: ', err);
        }
        console.log("Results: " + JSON.stringify(result.rows));
        res.send(result.rows);
      });
    })
}

function updatePattern(req, res){
    console.log("I'm going to try and update something...");
    var client = new pg.Client(conString);
    client.connect(function(err) {
    if (err) {
      return console.error('ERROR: ', err);
    }
      var statement = "UPDATE pattern SET pattern_name = $2, author_name = $3, image_url = $4, instructions = $5 WHERE pattern_id = $1";
      var params = [req.params.pattern_id, req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];
      
      console.log(req);
      console.log(params);
      
      var query = client.query(statement, params, function(err, result) {
        console.log("Queried something");
        client.end(function(err) {
          if (err) {
            return console.error('ERROR: ', err);
          }
        });

        if (err) {
          return console.error('ERROR: ', err);
        }
        console.log("Results: " + JSON.stringify(result.rows));
        res.send(result.rows);
      });
    })
}*/




/*Attempting to connect to my database
The password authentification keeps failing*/
/*function testing123(req, res) {
  console.log("I'm doing something in here . . .");
  var pattern_id = req.params.id;
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('ERROR: ', err);
    }
      var statement = "SELECT * FROM pattern WHERE pattern_id = $1::int";
      var params = [pattern_id];
      var query = client.query(statement, params, function(err, result) {
        console.log("Queried something");
        client.end(function(err) {
          if (err) {
            return console.error('ERROR: ', err);
          }
        });

        if (err) {
          return console.error('ERROR: ', err);
        }
        console.log("Results: " + JSON.stringify(result.rows));
        res.send(result.rows);
      });
    })
}*/
/*TEST POST*/
/*function testingOtherStuff(req, res) {
  console.log("I'm considering doing something...maybe...");
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('ERROR: ', err);
    }
      var statement = "INSERT INTO pattern(pattern_name, author_name, image_url, instructions) VALUES($1, $2, $3, $4) ";
      var params = [req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];
      
      console.log(req);
      console.log(params);
      
      var query = client.query(statement, params, function(err, result) {
        console.log("Queried something");
        client.end(function(err) {
          if (err) {
            return console.error('ERROR: ', err);
          }
        });

        if (err) {
          return console.error('ERROR: ', err);
        }
        console.log("Results: " + JSON.stringify(result.rows));
        res.send(result.rows);
      });
    })
}

function testingOnceAgain(req, res){
    console.log("I'm going to try and update something...");
    var client = new pg.Client(conString);
    client.connect(function(err) {
    if (err) {
      return console.error('ERROR: ', err);
    }
      var statement = "UPDATE pattern SET pattern_name = $2, author_name = $3, image_url = $4, instructions = $5 WHERE pattern_id = $1";
      var params = [req.params.pattern_id, req.params.pattern_name, req.params.author_name, req.params.image_url, req.params.instructions];
      
      console.log(req);
      console.log(params);
      
      var query = client.query(statement, params, function(err, result) {
        console.log("Queried something");
        client.end(function(err) {
          if (err) {
            return console.error('ERROR: ', err);
          }
        });

        if (err) {
          return console.error('ERROR: ', err);
        }
        console.log("Results: " + JSON.stringify(result.rows));
        res.send(result.rows);
      });
    })
    
}*/
