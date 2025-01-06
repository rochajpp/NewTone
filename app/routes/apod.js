module.exports = (app) => {
    app.get("/apod", (req, res) => {
        app.app.controllers.apod.main(app, req, res);
    })
}