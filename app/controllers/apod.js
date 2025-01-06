module.exports.main = (app, req, res) => {
    const axios = require('axios');
    const apiKey = process.env.API_KEY;

    axios.get("https://api.nasa.gov/planetary/apod?api_key=" + apiKey)
        .then(response => {
            res.render("apod/apod", {data: response.data});
            return;
        })
        .catch(error => {
            res.send(error);
            return;
        })
}