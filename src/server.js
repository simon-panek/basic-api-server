'use strict'; 

const express = require('express');
const app = express();

//middleware

const logger = require('./middleware/logger.js');
const notFoundHandler = require ('./error-handlers/404.js');
const serverError = require ('./error-handlers/500.js');
const treeRoutes = require ('./routes/tree-routes.js'); 
const foodRoutes = require ('./routes/food-routes.js');

//custom middleware
app.use(express.json());
app.use(logger);
app.use(treeRoutes);
app.use(foodRoutes);

app.get('/test', (req, res) => {
  res.status(200).send('Surprisingly, this thing works!');
})


app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
  server: app, 
  start: port => {
    if(!port) { throw new Error ('Port is lost in the woods...');}
    app.listen(port, () => {
      console.log (`The port ${port} be working.`);
    })
  }
}