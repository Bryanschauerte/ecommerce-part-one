var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

var port = 8811;



var db = mongojs('library');
var Product = db.collection('products');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

app.get('/products', function(req, res){
  Product.find({}, function(error, result){
    if(error){
      res.send(error);
    } else {
      //changes null and undefiend into valid json
      res.json(result);
      console.log(result)
    }
  });
});

app.post('/products', function(req, res){
  Product.insert(req.body, function(error, result){
    if(error){
      res.send(error);
    } else {
      //changes null and undefiend into valid json
      res.json(result);
      console.log(result)
    }
  });

});

app.put('/products/:id', function(req, res){
  Product.update({_id: mongojs.ObjectId(req.params.id)}, req.body, function(error, result){
    if(error){
      res.send(error);
    } else {
      //changes null and undefiend into valid json
      res.json(result);
      console.log(result)
    }
  });
});

app.delete('/products', function(req, res){
  Product.remove(req.body, function(error, result){
    if(error){
      res.send(error);
    } else {
      //changes null and undefiend into valid json
      res.json(result);
      console.log(result)
    }

  });

})

// app.get('*', function(req, res) {
//      res.sendfile('public/templateHtml/index.html'); // load the single view file (angular will handle the page changes on the front-end)
//  });

 app.listen(port, function(){
   console.log('Listening on port: ' + port);
 });
