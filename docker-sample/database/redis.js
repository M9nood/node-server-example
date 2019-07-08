const redis = require('redis')

const client = redis.createClient({
  host: 'db',
  port: 6379
})

function createClient(){
 return client
}


module.exports = {
  client,
  createClient
}