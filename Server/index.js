const app = require('./config/server');

const port = process.env.SERVER_PORT || "8080";

app.listen(port, () => {
    console.log("Server listen on: http://localhost:" + port);
})