const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app
    .use(cors())
    .use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});