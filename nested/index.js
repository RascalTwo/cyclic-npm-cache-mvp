const express = require('express');

const app = express();

app.use('*', (request, response) => response.send('Hello, ' + request.originalUrl));

app.listen(process.env.PORT || 3000);
