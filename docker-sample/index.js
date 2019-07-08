const express = require('express')
const redisEndpoint = require('./database/redis')
const app = express();

const client = redisEndpoint.createClient()
client.set('visits', 0)

app.get('/', async (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits)
    client.set('visits', parseInt(visits) + 1)
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});