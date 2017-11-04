var map = L.map('main_map').setView([22.31985,114.18887], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibW1tc2giLCJhIjoiY2o5a3BwanFyMDd3bjJ3bjQ2ZTY1NWkwbiJ9.gXnnyBCQuRG_6avCVUWYAQ'
}).addTo(map);

L.marker([22.31985,114.18887]).addTo(map)
		.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
