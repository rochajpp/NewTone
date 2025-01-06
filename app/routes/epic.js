module.exports = (app) => {
    app.get("/epic", (req, res) => {
        app.app.controllers.epic.main(app, req, res);
    })

    app.post("/epic/search", (req, res) => {
        app.app.controllers.epic.images(app, req, res);
    })
}