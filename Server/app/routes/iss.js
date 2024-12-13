module.exports = (app) => {
    app.get("/iss/data", (req, res) => {
        app.app.controllers.iss.data(app, req, res);
    });
}