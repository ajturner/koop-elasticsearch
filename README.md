# koop-elasticsearch

Currently this is **DEVELOPMENT** as it relies on a local ElasticSearch index that has a specific schema. Tools for building this schema coming soon.

## An ElasticSearch provider for koop

To install in an existing Koop server

```
  cd koop
  git clone 
  cd koop-elasticsearch && npm install && cd ../
  cd node_modules && ln -s ../koop-elasticsearch && cd ..
  node server
```

then visit `localhost:1337/elasticsearch/features/preview`

## License

Apache
