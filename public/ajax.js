function showAllPatterns(){
    console.log('Searching....');
    
    var myNode = document.getElementById("results");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);
                var outputDiv = document.getElementById('results');
                
                var unorderedList = document.createElement('ul');
                
                results.forEach(function(pattern){
                    console.log(pattern.pattern_name, pattern.image_url);
                    
                    var link = document.createElement('button');
                    
                    var listItem = document.createElement('li');
                    var img = document.createElement('img');
                    var arrow = document.creat
                    
                    
                    link.setAttribute('onclick', "onePattern(" + pattern.pattern_id + ")");
                    unorderedList.setAttribute('id', "pickPattern");
                    img.setAttribute('src', "./image/" + pattern.image_url);
                    img.setAttribute('alt', pattern.pattern_name);
                    
                    link.textContent = pattern.pattern_name;
                    
                    outputDiv.appendChild(unorderedList);
                    unorderedList.appendChild(listItem);
                    listItem.appendChild(img);
                    listItem.appendChild(link);
                });
                
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

function narrowResults(){
    console.log('Searching....');
    
    var myNode = document.getElementById("results");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                results.forEach(function(category){
                    console.log(category.category_name);
                    
                    /*var link = document.createElement('input');
                    var label = document.createElement('label');*/
                    var button = document.createElement('button');
                    
                    
                    /*link.setAttribute('type', 'radio'); link.setAttribute('id', category.category_id);
                    link.setAttribute('name', 'category');*/
                    button.setAttribute('onclick', "oneCategory(" + category.category_id + ")");
                    
                    button.textContent = category.category_name + ' \u2192';
                    
                    /*outputDiv.appendChild(label)
                    outputDiv.appendChild(link)*/
                    outputDiv.appendChild(button);
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
    
    xmlhttp.open('GET', '/allCategories', true);
    xmlhttp.send();
}

function oneCategory(req, res){
    console.log('Searching for one category....'  + req);
    
    if (document.getElementById("resultsChild") != null){
        var myNode = document.getElementById("results");
        var gone = document.getElementById("resultsChild")
        myNode.removeChild(gone);
    }
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                var outPutDivChild = document.createElement('div');
                
                outPutDivChild.setAttribute('id', 'resultsChild')
                
                results.forEach(function(pattern){
                    console.log(pattern.pattern_name);
                    
                    var link = document.createElement('button');
                    
                    
                    link.setAttribute('onclick', "onePattern(" + pattern.pattern_id + ")");
                    
                    link.textContent = pattern.pattern_name;
                    
                    outputDiv.appendChild(outPutDivChild);
                    outPutDivChild.appendChild(link);
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
    console.log("This is the request variables for the category: " + req)
    xmlhttp.open('GET', '/oneCategory/' + req, true);
    xmlhttp.send();
}


function onePattern(req, res){
    console.log('Getting One Pattern....' + req);
    
    /*Clear the info in the results DIV*/
    var myNode = document.getElementById("results");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
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
                    
                    var person = document.createElement('h3')
                    var mainText = document.createElement('p');
                    var image = document.createElement('img')
                    image.setAttribute('src', "image/" + pattern.image_url);
                    var figure = document.createElement('figure');
                    var figcaption = document.createElement('figcaption');
                    
                    var deleteStuff = document.createElement('button');
                    var change = document.createElement('button');
                    
                    
                    change.setAttribute('onclick', "showUpdateStuff(" + pattern.pattern_id + ")");
                    deleteStuff.setAttribute('onclick', "deletePattern(" + pattern.pattern_id + ")");
                    image.setAttribute('alt', pattern.pattern_name);
                    
                    figcaption.textContent = pattern.pattern_name;
                    mainText.textContent = "Instructions: " + pattern.instructions;
                    person.textContent = "Author: " + pattern.author_name;
                    
                    change.textContent = "Update Pattern";
                    deleteStuff.textContent = "Delete Pattern";
                    
                    outputDiv.appendChild(figure);
                    figure.appendChild(image);
                    figure.appendChild(figcaption);
                    outputDiv.appendChild(person);
                    outputDiv.appendChild(mainText);
                    outputDiv.appendChild(change);
                    outputDiv.appendChild(deleteStuff);
                    outputDiv.appendChild(deleteStuff);
                    outputDiv.appendChild(deleteStuff);
                    
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
    
    var myNode = document.getElementById("results");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
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
                    name.setAttribute('id', 'pattern_name');
                    
                    image.setAttribute('value', pattern.image_url);
                    image.setAttribute('id', 'img_url');
                    
                    author.setAttribute('value', pattern.author_name);
                    author.setAttribute('id', 'author_name');
                    
                    instruction.setAttribute('value', pattern.instructions);
                    instruction.setAttribute('id', 'instructions');
                    
                    // Let's handle this at the form level instead:
                    //submitButton.setAttribute('onclick', 'updatePattern(' + pattern.pattern_id + ')');
  
                    // Listen for submit events on the form element
                    form.addEventListener('submit', function(e) {
                      // The e parameter in this callback represents an Event object.
                      // We can use it here to prevent the browser from following its default behavior:
                      e.preventDefault();
                      
                      // Call the newPattern function as before:
                      updatePattern(pattern.pattern_id);
                    });
                    
                    
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
            console.log(" This are the things I was passed: " + pattern_name + ', ' + author_name + ', ' + image_url + ', ' + instructions);
    
    
    /*The clearing informaiton has to go after it recieves the info from the user*/
    var myNode = document.getElementById("results");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am starting an update. See: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                /*results.forEach(function(pattern){
                    console.log(pattern.pattern_name, pattern.author_name, pattern.instructions, pattern.image_url);
                    
                    var display = document.createElement('p');
                    var image = document.createElement('img')
                    image.setAttribute('src', "../image/" + pattern.image_url);
                    
                    var change = document.createElement('button');
                    
                    
                    change.setAttribute('onclick', "updatePattern(" + req + ")");
                    
                    display.textContent = pattern.instructions;
                    display.textContent = pattern.instructions;
                    display.textContent = pattern.instructions;
                    change.textContent = "Update Pattern";
                    
                    
                    outputDiv.appendChild(image);
                    outputDiv.appendChild(display);
                    outputDiv.appendChild(change);
                    
                });*/
                
            }else if (xmlhttp.status === 400) {
                alert('There was an error 400!')
            }
            else {
                alert('something else other than 200 was returned');
            }
    };
    
    
    xmlhttp.open('POST', '/updatePattern/' + req + '/' + pattern_name + '/' + author_name + '/' + image_url + '/' + instructions, true);
    xmlhttp.send();
}


/*****************************************/
/*********DONT TOUCH THIS STUFF!!!********/
/*****************************************/


function showNewPatternForm(req, res){
    /*console.log('Show the update' + req);
    
    
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){*/
    
    var myNode = document.getElementById("results");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
            console.log('done');
            /*if (xmlhttp.status === 200){*/
                /*console.log(xmlhttp.responseText)*/
                /*var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am working....see: ' + results);*/
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                /*results.forEach(function(pattern){*/
                    
                    
                    var form = document.createElement('form');
                    
    
                    var textFields = document.createElement('div');
                    var labels = document.createElement('div');
                    
                    var nameLabel = document.createElement('label');
                    var name = document.createElement('input');
                    var imageLabel = document.createElement('label');
                    var image = document.createElement('input');
                    var authorLabel = document.createElement('label');
                    var author = document.createElement('input');
                    var instructionLabel = document.createElement('label');
                    var instruction = document.createElement('input');
                    var button = document.createElement('button');
                    
    
                    textFields.setAttribute('id', 'text-fields');
                    labels.setAttribute('id', 'labels');
                    name.setAttribute('id', 'pattern_name');
                    name.setAttribute('type', 'text');
                    name.setAttribute('placeholder', 'Name of Pattern');
                    image.setAttribute('id', 'img_url');
                    image.setAttribute('placeholder', 'An Image URL');
                    image.setAttribute('type', 'text');
                    author.setAttribute('id', 'author_name');
                    author.setAttribute('placeholder', 'The Pattern Authors Name');
                    author.setAttribute('type', 'text');
                    instruction.setAttribute('id', 'instructions');
                    instruction.setAttribute('placeholder', 'Detailed Instructions');
                    instruction.setAttribute('type', 'text');
    
    
    // Let's handle this at the form level instead:
                    //button.setAttribute('onclick', 'newPattern(' +  + ')');
  
                    // Listen for submit events on the form element
                    form.addEventListener('submit', function(e) {
                      // The e parameter in this callback represents an Event object.
                      // We can use it here to prevent the browser from following its default behavior:
                      e.preventDefault();
                      
                      // Call the newPattern function as before:
                      newPattern();
                    });
    
    
                    button.textContent = "Save Pattern";
                    nameLabel.textContent = "Pattern Name:";
                    imageLabel.textContent = "Image URL:";
                    authorLabel.textContent = "Author Name:";
                    instructionLabel.textContent = "Instructions:";
    

    
                    outputDiv.appendChild(form);
    
                    form.appendChild(labels);              
                    labels.appendChild(nameLabel);
                    labels.appendChild(imageLabel);
                    labels.appendChild(authorLabel);
                    labels.appendChild(instructionLabel);
    
                    form.appendChild(textFields);
                    textFields.appendChild(name);
                    textFields.appendChild(image);
                    textFields.appendChild(author);
                    textFields.appendChild(instruction);
    
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
    
    var myNode = document.getElementById("results");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
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
/************************/
/******DELETE STUFF******/
/************************/

function deletePattern(req, res){
    console.log('Deleting this ' + req + ' Pattern.');
    
    
    var xmlhttp = new XMLHttpRequest();
    
    
    /*var pattern_name = document.getElementById("pattern_name").value;
    var image_url = document.getElementById("img_url").value;
    var author_name = document.getElementById("author_name").value;
    var instructions = document.getElementById("instructions").value;
            console.log(" This are the things I was passed: " + pattern_name + ', ' + author_name + ', ' + image_url + ', ' + instructions);*/

    
    /*The clearing informaiton has to go after it recieves the info from the user*/
    var myNode = document.getElementById("results");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
    
    xmlhttp.onload = function(){
            console.log('done');
            if (xmlhttp.status === 200){
                console.log(xmlhttp.responseText)
                var results = JSON.parse(xmlhttp.responseText).list;
                console.log('I am starting a delete. See: ' + results);
                var outputDiv = document.getElementById('results'); //.innerHTML = results;
                
                /*results.forEach(function(pattern){
                    console.log(pattern.pattern_name, pattern.author_name, pattern.instructions, pattern.image_url);
                    
                    var display = document.createElement('p');
                    var image = document.createElement('img')
                    image.setAttribute('src', "../image/" + pattern.image_url);
                    
                    var change = document.createElement('button');
                    
                    
                    change.setAttribute('onclick', "updatePattern(" + req + ")");
                    
                    display.textContent = pattern.instructions;
                    display.textContent = pattern.instructions;
                    display.textContent = pattern.instructions;
                    change.textContent = "Update Pattern";
                    
                    
                    outputDiv.appendChild(image);
                    outputDiv.appendChild(display);
                    outputDiv.appendChild(change);
                    
                });*/
                
            }else if (xmlhttp.status === 400) {
                alert('There was an error 400!')
            }
            else {
                alert('something else other than 200 was returned');
            }
    };
    
    
    xmlhttp.open('POST', '/deletePattern/' + req, true);
    xmlhttp.send();
}