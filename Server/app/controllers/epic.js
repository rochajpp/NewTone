module.exports.main = (app, req, res) => {
    const axios = require('axios');
    const apiKey = process.env.API_KEY;

    axios.get("https://epic.gsfc.nasa.gov/api/natural/all")
        .then(response => {
            res.render("epic/epic", {dates: response.data});
            return;
        })
        .catch(error => {
            res.send(error);
            return;
        })
}

module.exports.images = (app, req, res) =>{
    const data = req.body;
    const apiKey = process.env.API_KEY;
    const axios = require('axios');

    axios.get("https://epic.gsfc.nasa.gov/api/" + data.type + "/date/" + data.date)
        .then(response => {
            res.render("epic/search", {data: response.data, dateImg: data.date, typeImg: data.type});
            return;
        })
        .catch(error => {
            res.send(error);
            return;
        })

}