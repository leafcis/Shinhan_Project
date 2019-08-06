const express = require('express');
const app = express();
const cors = require('cors')
const route = require('./router/main.js');
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', route);

app.listen(port, function() {
    console.log(`Express server has started on port ${port}`)
})