// https://expressjs.com/en/starter/hello-world.html
'use strict';
const express = require('express');
const app = express();

// Settings
/* Heroku waits this variable name on the deployment 
Server and client cant have the same port
*/

app.set('PORT',process.env.PORT || 5000);


/* [MIDDLEWARES] */
/* Server can understand if it receives a json from the front */
app.use(express.json());

// ROUTER-ROUTES-ENDPOINTS
/* https://expressjs.com/en/starter/basic-routing.html */
app.use(require('./routes/employees'));


/////////////////////////////////////////////////////

app.listen(app.get('PORT'),()=>{
    console.log(`Server on port ${app.get('PORT')}`);
});