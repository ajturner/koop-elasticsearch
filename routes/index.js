// Defines the routes and params name that will be passed in req.params 
module.exports = {
  
  // 'get /elasticsearch/': {
  //   controller: 'elasticsearch',
  //   action: 'index'
  // },

  // 'get /elasticsearch': {
  //   controller: 'elasticsearch',
  //   action: 'index'
  // },

  'get /elasticsearch/:id.:format': {
    controller: 'elasticsearch',
    action: 'get'
  },

  'get /elasticsearch/:id/:dataset': {
    controller: 'elasticsearch',
    action: 'get'
  },

  'get /elasticsearch/:id/:dataset/preview': {
    controller: 'elasticsearch',
    action: 'preview'
  },

  'get /elasticsearch/:id/:dataset/FeatureServer': {
    controller: 'elasticsearch',
    action: 'featureservice'
  },

  'get /elasticsearch/:id/:dataset/FeatureServer/:layer': {
    controller: 'elasticsearch',
    action: 'featureservice'
  },

  'get /elasticsearch/:id/:dataset/FeatureServer/:layer/:method': {
    controller: 'elasticsearch',
    action: 'featureservice'
  },

  // 'get /elasticsearch/:id/thumbnail' : {
  //   controller  : 'elasticsearch',
  //   action: 'thumbnail'
  // },

  // 'get /elasticsearch/:id/tiles/:z/:x/:y.:format': { 
  //   controller : 'elasticsearch',
  //   action: 'tiles'
  // }

}
