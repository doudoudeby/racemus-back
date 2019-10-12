const express = require('express');
const listEndpoints = require('express-list-endpoints');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
var apiRouter = require('./apiRouter').route;



app.use(bodyParser.json());
app.use(cors());







app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/V0/', apiRouter);




app.listen(8085, ()=> {
    console.log("server lancé au port 8085");
});

console.log(listEndpoints(app));