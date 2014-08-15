var request = require('request');

exports.find = function( id, options, callback ){

  var type = 'Elasticsearch';
  var geojson = { type:'FeatureCollection', features:[] };

  query = {"from" : 0, "size" : 1000, "query": {'match': '*'}};

  if(options.geometry) {
    var geom = JSON.parse(options.geometry)
        extent = [[geom.xmin,geom.ymax],[geom.xmax,geom.ymin]];

    query['query'] = {'geo_shape': {'geometry': {'shape': {
                      'type': "envelope",
                      'coordinates': extent
                  } } } }  
  }
  var url = 'http://localhost:9200/'+id+'/_search';

  request.get({url: url, body: JSON.stringify(query)}, function(e, res){
    // TODO: add error handling if invalid index - ajturner
    if( res.statusCode == 200 ) { 
        var json = JSON.parse(res.body),
            features = json.hits.hits;
        console.log("Number", features.length)
        // do something; turn it into GeoJSON
        features.forEach(function(row,i){
          feature = { type: 'Feature', properties: JSON.parse(row['_source'].properties), geometry: row['_source'].geometry };
          geojson.features.push( feature );
        });
    }
    callback( null, [geojson] );

  });
};