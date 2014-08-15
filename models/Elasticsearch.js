var request = require('request');

exports.find = function( id, options, callback ){

  var type = 'Elasticsearch';
  var geojson = { type:'FeatureCollection', features:[] };

  // check the cache for data with this type & id 
  Cache.get( type, id, options, function(err, entry ){
    if ( err){
      // if we get an err then get the data and insert it 
      var url = 'http://localhost:9200/'+id+'/_search'; // <-- change this 

      request.get(url, function(e, res){
        var json = JSON.parse(res.body);
        console.log(json);
        // do something; turn it into GeoJSON
        json.forEach(function(row,i){
          feature = { type: 'Feature', properties: row['properties'], geometry: row['geometry'] };
          geojson.features.push( feature );
        });
        // insert data   
        Cache.insert( type, id, geojson, 0, function( err, success){
          if ( success ) {
            callback( null, json );
          }
        });
      });
    } else {
      callback( null, entry );
    }
  });
};
