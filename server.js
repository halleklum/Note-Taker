const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3001;
const html_routes = require('./Routes/html-routes')
const api_routes = require('./Routes/api-routes')


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

// starts the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});