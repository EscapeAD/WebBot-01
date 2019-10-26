const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');

//  Connect all our routes to our application
const server = () => {
    app.use('/', routes);
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
}

module.exports = server