console.log("Main.js loaded.");

var map = new ol.Map({
  target: 'main_map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([114.18887, 22.31985]),//22.31985,114.18887
    zoom: 14
  })
});

var markers = new OpenLayers.Layer.Markers("Markerr");
map.addLayer(markers);
markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(-0.1279688 ,51.5077286)));
