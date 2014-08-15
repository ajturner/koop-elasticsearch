var request = require('request');

exports.find = function( id, options, callback ){

  var type = 'Elasticsearch';
  var geojson = { type:'FeatureCollection', features:[] };

  var url = 'http://localhost:9200/'+id+'/_search'; // <-- change this 

  request.get(url, function(e, res){
    // TODO: add error handling if invalid index - ajturner
    var json = JSON.parse(res.body),
        features = json.hits.hits;
    // do something; turn it into GeoJSON
    features.forEach(function(row,i){
      feature = { type: 'Feature', properties: row['_source'].properties, geometry: row['_source'].geometry };
      geojson.features.push( feature );
    });
        callback( null, geojson );
  });
};
