const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const getTitle = require("./src/web-scrapping");


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)



// Add custom routes before JSON Server router
server.post('/get-title', async (req, res) => {
  console.log("req.body.url = " + req.body.url);
  try{
    let result = await getTitle(req.body.url);
    res.jsonp(result);  
  }catch(e){
    res.jsonp({title: "Failed to get title of this URL"});
  }
})

// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })


server.use(router)
const port = process.env.PORT ? process.env.PORT : 3030;

server.listen(port, () => {
  console.log(`JSON Server is running on port(${port})`)
})