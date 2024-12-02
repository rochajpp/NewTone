module.exports = (app) => {
    app.get("/iss", (req, res) => {
        app.app.controllers.iss.main(app, req, res);
    });

    app.get("/iss/data", (req, res) => {
        app.app.controllers.iss.data(app, req, res);
    });
}