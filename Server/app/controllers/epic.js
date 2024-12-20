module.exports.main = (app, req, res) => {
    const axios = require('axios');

    axios.get("https://epic.gsfc.nasa.gov/api/natural/all", {timeout: 1000})
        .then(response => {
            res.send(response.data);
            return;
        })
        .catch(error => {
            
            if(error.code === 'ECONNABORTED'){
                console.error("Tempo limite atingido");
            }

            res.send(error);
            return;
        })
}

module.exports.images = (app, req, res) =>{
    const data = req.body;
    const axios = require('axios');

    console.log(data);

    axios.get("https://epic.gsfc.nasa.gov/api/" + data.type + "/date/" + data.date)
        .then(response => {
            res.send({data: response.data, dateImg: data.date, typeImg: data.type});
            return;
        })
        .catch(error => {
            res.send(error);
            return;
        })

}
