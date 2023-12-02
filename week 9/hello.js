const express = require('express');
app = express();
app.get('/login', function(request, response){
response.send("Login Page");
});
app.get('/users/ken', function(request, response){
    response.send("Ken's Home Page");
});
app.get('/users/matty', function(request, response){
    response.send("Matty's Home Page");
});
app.get('/users/danny', function(request, response){
    response.send("Danny's Home Page");
});
app.listen(3000,function(){
    console.log('Express server started')
});

