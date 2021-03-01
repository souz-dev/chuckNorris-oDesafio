
const express = require("express");
const cors = require('cors')
const port = process.env.PORT || 3005; 

const app = express(); 

const routes = require('./src/routes')
app.use(cors())
app.use(express.json()); 
app.use('/api', routes)



app.listen(port); 