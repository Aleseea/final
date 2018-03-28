function showAllPatterns(){
    console.log('Searching....');
    
    var xmlhttp = new XMLHttpRequest();
    
    /*var pattern_id = document.getElementById("displayAll").value;
    console.log(" This was searched: " + displayAll);*/
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results)
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                results.forEach(function(pattern){
                    console.log(pattern.pattern_name);
                    
                    var div = document.createElement('div');
                    
                    div.textContent = pattern.pattern_name;
                    
                    outputDiv.appendChild(div);
                });
                
                /*console.log("Back from the server with: " + xmlhttp.results)*/
                /*JSON.parse(xmlhttp.responseText).Search;*/       /*console.log(JSON.parse(xmlhttp.responseText).Search)*/
                /*updatePage(xmlhttp.res);*/
            }else if (xmlhttp.status === 400) {
                alert('There was an error 400!')
            }
            else {
                alert('something else other than 200 was returned');
            }
    };
    
    xmlhttp.open('GET', '/allPatterns', true);
    xmlhttp.send();
}


function updatePage(results){
    console.log('Updating the div with these results: ' + results);
    document.getElementById('results').innerHTML = results;
}


/*function onePattern(req, res){
    console.log('Pulling up one pattern....');
    
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