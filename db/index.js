var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('./tests/db.json');
var path = require("path")
var middlewares  = jsonServer.defaults();
server.use(middlewares);
// server.use(function(req) {
//     console.log(req.body)
// })
server.use('/api/v1', router)
server.listen(4000, function () {
  console.log('JSON Server is running')
});
