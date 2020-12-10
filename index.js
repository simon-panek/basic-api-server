'use strict';

require('dotenv').config();
const server = require('./src/server.js'); //import server

server.start(process.env.PORT); 