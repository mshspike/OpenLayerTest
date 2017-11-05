var greenIcon = L.icon({
  iconUrl: "./images/icons/marker-green.png",
  iconSize: [25,41],
  iconAnchor: [13,40],
  popupAnchor: [0,-45]
});
var yellowIcon = L.icon({
  iconUrl: "./images/icons/marker-yellow.png",
  iconSize: [25,41],
  iconAnchor: [13,40],
  popupAnchor: [0,-45]
});
var redIcon = L.icon({
  iconUrl: "./images/icons/marker-red.png",
  iconSize: [25,41],
  iconAnchor: [13,40],
  popupAnchor: [0,-45]
});

/****** Declaring Map object ******/
var map = L.map('main_map').setView([22.31985,114.18887], 13);

/****** Declaring List of marker Object using GeoJSON format ******/
// Todo: Get data from Google Map data API
var list = {
  type: "FeatureCollection",
  features: [  // Point List
    { type: "Feature",
      properties: {
        name: "Mannings Ma Tau Kok Road",
        stocklevel: 200
      },
      geometry: {
        type: "Point",
        coordinates: [114.18887,22.31985]
      },
    }, {
      type: "Feature",
      properties: {
        name: "Mannings To Kwa Wan",
        stocklevel: 10
      },
      geometry: {
        type: "Point",
        coordinates: [114.1891616,22.3163296]
      },
    }
  ]
}

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

L.geoJSON(list, {
  pointToLayer: function(feature, latlng) {
    var icon = greenIcon;
    if (feature.properties.stocklevel < 100) {
      if (feature.properties.stocklevel <50) {
        icon = redIcon;
      } else {
        icon = yellowIcon;
      }
    }
    return L.marker(latlng, {icon: icon});
  }
}).bindPopup(function(layer) {
  return layer.feature.properties.name;
}).addTo(map);
