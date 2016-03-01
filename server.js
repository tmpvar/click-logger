var skateboard = require('skateboard')

var port = 8000;

var server = skateboard({ port: 8000 }, function(client) {
  client.on('data', function(d) {
    console.log('recieved:', d)
  })
})

server.on('listening', function() {
  console.log('http://localhost:%s/', server.address().port)
})
