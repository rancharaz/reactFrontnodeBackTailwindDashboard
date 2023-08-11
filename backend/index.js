const express = require('express'); /* initiate express */
require('./database/Config') /* integrate db connection */
const app = express();/* initiate express in const app */
cors = require('cors'); /* import cors different domain call allow */
app.use(express.json());


//setting headers
app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})
//adding cors 
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions));


//http://localhost:8080/api/employee
app.use('/api', require('./routes/UserRoutes'));
app.use('/api', require('./routes/ProductRoutes'));



app.listen(8080)