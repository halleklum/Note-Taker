const express = require('express');
const html_routes = require('./Routes/html-routes')
const api = require('./Routes/api-routes')
const app = express();
const PORT = process.env.PORT || 3001;


// Order matters for express middleware, top to bottom
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use('/', html_routes);
app.use('/api', api);
// starts the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});