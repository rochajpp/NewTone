module.exports = (app) => {
    app.get("/epic", (req, res) => {
        app.app.controllers.epic.main(app, req, res);
    })
}