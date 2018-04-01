function showAllPatterns(){
    console.log('Searching....');
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                results.forEach(function(pattern){
                    console.log(pattern.pattern_name);
                    
                    var link = document.createElement('button');
                    
                    
                    link.setAttribute('onclick', "onePattern(" + pattern.pattern_id + ")");
                    
                    link.textContent = pattern.pattern_name;
                    
                    outputDiv.appendChild(link);
                });
                
                /*---------------------------------------
                var createA = document.createElement('a');
                var createAText = document.createTextNode(theCounter);
                createA.setAttribute('href', "http://google.com");
                createA.appendChild(createAText);
                getTheTableTag.appendChild(createA)
                ------------------------------------------*/
            }else if (xmlhttp.status === 400) {
                alert('There was an error 400!');
            }
            else {
                alert('something else other than 200 was returned');
            }
    };
    
    xmlhttp.open('GET', '/allPatterns', true);
    xmlhttp.send();
}


function onePattern(req, res){
    console.log('Getting One Pattern....' + req);
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                results.forEach(function(pattern){
                    console.log(pattern.pattern_name, pattern.author_name, pattern.instructions, pattern.image_url);
                    
                    var display = document.createElement('p');
                    var image = document.createElement('img')
                    image.setAttribute('src', "../image/" + pattern.image_url);
                    
                    var change = document.createElement('button');
                    
                    
                    change.setAttribute('onclick', "showUpdateStuff(" + pattern.pattern_id + ")");
                    
                    display.textContent = pattern.instructions;
                    display.textContent = pattern.instructions;
                    display.textContent = pattern.instructions;
                    change.textContent = "Update Pattern";
                    
                    
                    outputDiv.appendChild(image);
                    outputDiv.appendChild(display);
                    outputDiv.appendChild(change);
                    
                });
                
            }else if (xmlhttp.status === 400) {
                alert('There was an error 400!')
            }
            else {
                alert('something else other than 200 was returned');
            }
    };
    
    console.log("This is the request variables: " + req)
    xmlhttp.open('GET', '/onePattern/' + req, true);
    xmlhttp.send();
}


function showUpdateStuff(req, res){
    console.log('Show the update' + req);
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                results.forEach(function(pattern){
                    console.log(pattern.pattern_name, pattern.author_name, pattern.instructions, pattern.image_url);
                    
                    var form = document.createElement('form');
                    
                    var name = document.createElement('input');
                    var image = document.createElement('input');
                    var author = document.createElement('input');
                    var instruction = document.createElement('input');
                    var submitButton = document.createElement('button');
                    
                    
                    name.setAttribute('value', pattern.pattern_name);
                    
                    image.setAttribute('value', pattern.image_url);
                    
                    author.setAttribute('value', pattern.author_name);
                    
                    instruction.setAttribute('value', pattern.instructions);
                    
                    submitButton.setAttribute('onclick', 'updatePattern()');
                    submitButton.textContent = "Update";
                    
                    outputDiv.appendChild(form);
                    form.appendChild(name);
                    form.appendChild(image);
                    form.appendChild(author);
                    form.appendChild(instruction);
                    form.appendChild(submitButton);
                    
                });
                
            }else if (xmlhttp.status === 400) {
                alert('There was an error 400!')
            }
            else {
                alert('something else other than 200 was returned');
            }
    };
    
    
    xmlhttp.open('GET', '/updateForm/' + req, true);
    xmlhttp.send();
}



function updatePattern(req, res){
    console.log('Updating this ' + req + ' Pattern.');
    
    var xmlhttp = new XMLHttpRequest();
    
    
    var pattern_name = document.getElementById("pattern_name").value;
    var image_url = document.getElementById("img_url").value;
    var author_name = document.getElementById("author_name").value;
    var instructions = document.getElementById("instructions").value;
            console.log(" This is the things I was passed: " + pattern_name + ', ' + author_name + ', ' + image_url + ', ' + instructions);
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am starting an update. See: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                results.forEach(function(pattern){
                    console.log(pattern.pattern_name, pattern.author_name, pattern.instructions, pattern.image_url);
                    
                    var display = document.createElement('p');
                    var image = document.createElement('img')
                    image.setAttribute('src', "../image/" + pattern.image_url);
                    
                    var change = document.createElement('button');
                    
                    
                    change.setAttribute('onclick', "updatePattern(" + pattern.pattern_id + ")");
                    
                    display.textContent = pattern.instructions;
                    display.textContent = pattern.instructions;
                    display.textContent = pattern.instructions;
                    change.textContent = "Update Pattern";
                    
                    
                    outputDiv.appendChild(image);
                    outputDiv.appendChild(display);
                    outputDiv.appendChild(change);
                    
                });
                
            }else if (xmlhttp.status === 400) {
                alert('There was an error 400!')
            }
            else {
                alert('something else other than 200 was returned');
            }
    };
    
    
    xmlhttp.open('POST', '/newPattern/' + req + '/' pattern_name + '/' + author_name + '/' + image_url + '/' + instructions, true);
    xmlhttp.send();
}


function showNewPatternForm(req, res){
    /*console.log('Show the update' + req);
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){*/
            console.log('done');
            /*if (xmlhttp.status === 200){*/
                /*console.log(xmlhttp.responseText)*/
                /*var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);*/
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                /*results.forEach(function(pattern){*/
                    
                    
                    var form = document.createElement('form');
                    
                    var name = document.createElement('input');
                    var image = document.createElement('input');
                    var author = document.createElement('input');
                    var instruction = document.createElement('input');
                    var button = document.createElement('button');
                    
                    name.setAttribute('id', 'pattern_name');
                    name.setAttribute('type', 'text');
                    name.setAttribute('placeholder', 'Name of Pattern');
                    image.setAttribute('id', 'img_url');
                    image.setAttribute('placeholder', 'an image url');
                    image.setAttribute('type', 'text');
                    author.setAttribute('id', 'author_name');
                    author.setAttribute('placeholder', 'The Pattern Authors name');
                    author.setAttribute('type', 'text');
                    instruction.setAttribute('id', 'instructions');
                    instruction.setAttribute('placeholder', 'Detailed instructions');
                    instruction.setAttribute('type', 'text');
    
                    button.setAttribute('onclick', 'newPattern(' +  + ')');
    
    
                    button.textContent = "Save Pattern";
    

    
                    outputDiv.appendChild(form);
                    form.appendChild(name);
                    form.appendChild(image);
                    form.appendChild(author);
                    form.appendChild(instruction);
                    form.appendChild(button);
                    
               /* });*/
                
           /* }else if (xmlhttp.status === 400) {
                alert('There was an error 400!')
            }
            else {
                alert('something else other than 200 was returned');
            }*/
    /*};*/
    
    
    /*xmlhttp.open('GET', '/newForm/' + req, true);
    xmlhttp.send();*/
    console.log('something tried to happen');
}
function newPattern(req, res){
    console.log('Creating a new pattern....');
    
    var xmlhttp = new XMLHttpRequest();
    
    var pattern_name = document.getElementById("pattern_name").value;
    var image_url = document.getElementById("img_url").value;
    var author_name = document.getElementById("author_name").value;
    var instructions = document.getElementById("instructions").value;
            console.log(" This is the things I was passed: " + pattern_name + ', ' + author_name + ', ' + image_url + ', ' + instructions);
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                    
                
            }else if (xmlhttp.status === 400) {
                alert('There was an error 400!')
            }
            else {
                alert('something else other than 200 was returned');
            }
    };
    
    
    xmlhttp.open('POST', '/newPattern/' + pattern_name + '/' + author_name + '/' + image_url + '/' + instructions, true);
    xmlhttp.send();
}
