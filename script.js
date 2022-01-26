var map = L.map('mapid').setView([38.635, -90.234], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var mdh = L.marker([38.6363,-90.23]).addTo(map);
mdh.bindPopup("incapable of leaving");
var dph = L.marker([38.6361,-90.2367]).addTo(map);

var sketch = L.circle([38.632,-90.2336],{
  color: 'red',
  fillColor: '#005500',
  fillOpacity: 0.6,
  radius: 50
}).addTo(map);
sketch.bindPopup("hate this place");

var avoid = L.polygon([
  [38.6344,-90.2335],
  [38.6345,-90.2345],
  [38.631,-90.2349]
]).addTo(map);

function onMapClick(e){
  alert("heyo");
}
map.on("click", onMapClick);
