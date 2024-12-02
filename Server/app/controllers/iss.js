module.exports.main = (app, req, res) => {
    res.render("iss/iss");
    return;
}

module.exports.data = (app, req, res) => {
    const axios = require('axios');

    axios.get("http://api.open-notify.org/iss-now.json")
        .then(response => {
            res.json(response.data);
            return;
        })
        .catch(error => {
            res.send(error);
            return;
        });
}