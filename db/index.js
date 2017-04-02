import jsonServer from 'json-server'
import path from 'path'
let server = jsonServer.create()
let router = jsonServer.router('./db/db.json')
let middlewares = jsonServer.defaults()
server.use(middlewares)
server.use('/api/v1', router)
server.listen(4000, function () {
  console.log('JSON Server is running')
})
