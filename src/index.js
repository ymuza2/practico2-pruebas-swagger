const express = require('express');
const app = express(); 
const morgan = require('morgan');
const router = require('./routes/routes.index');
const swaggerUi = require('swagger-ui-express');

import{swaggerDocument} from "./swagger";

app.set('port', 3000);

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(router);

app.listen(app.get('port'), () =>{
    console.log(`Server listen on port ${app.get('port')}`);

});

