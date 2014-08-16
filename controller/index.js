var extend = require('node.extend'),
  crypto = require('crypto'),
  fs = require('fs');

// inherit from base controller (global via koop-server)
var Controller = extend( {}, BaseController );

// general helper for not found repos
Controller.notFound = function(req, res){
  res.send('A useful error for missing data', 404);
};


// general helper for error'd requests
Controller.Error = function(req, res){
  res.send('Another useful error', 500);
};


// 
Controller.get = function(req, res){
    var key = ['Elasticsearch'];
    Elasticsearch.find(req.params.id, req.params.dataset, req.query, function(err, data){
      if (err){
        res.send(err, 500);
      } else {
        res.json( data );
      }
    });
};

Controller.featureservice = function(req, res){
    var callback = req.query.callback, self = this;
    delete req.query.callback;

    Elasticsearch.find(req.params.id, req.params.dataset, req.query, function(err, data){
      if (err) {
        res.send(err, 500);
      } else {
        delete req.query.geometry;
        Controller._processFeatureServer( req, res, err, data, callback);
      }
    });
};

Controller.preview =  function(req, res){
    res.render(__dirname + '/../views/index', { locals:{ id: req.params.id, dataset: req.params.dataset } });
}

module.exports = Controller;

