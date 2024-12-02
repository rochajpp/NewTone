async function initMap(){
    var position;

    await fetch("/iss/data")
    .then((response) => {
        return response.json();
    }) 
    .then((data) => {
        position = data.iss_position;
    });

    document.querySelector(".lat p").innerHTML = position.latitude;
    document.querySelector(".long p").innerHTML = position.longitude;

    var latitude = parseFloat(position.latitude); // Latitude desejada
    var longitude = parseFloat(position.longitude); // Longitude desejada

     // Cria um objeto de mapa
     var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 2
    });
  
    var icon = {
        url: '/iss/assets/issIcon.png'
    };

    // Adiciona um marcador no mapa
    var marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        icon: icon
    });

    setInterval(async () => {
        await fetch("/iss/data")
        .then((response) => {
            return response.json();
        }) 
        .then((data) => {
            position = data.iss_position;
        });


        latitude = position.latitude;
        longitude = position.longitude;

        marker.setPosition({
            lat: parseFloat(latitude),
            lng: parseFloat(longitude)
        });

        document.querySelector(".lat p").innerHTML = position.latitude;
        document.querySelector(".long p").innerHTML = position.longitude;
        
        console.log("Atualização bem-sucedida")
    }, 1000);
}