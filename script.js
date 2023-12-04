// icon style variables
var dotSize = 14, // size of the icon [w, h]
    dotAnchor = 7, // point of the icon which will correspond to marker's location [x, y]
    dotPop = -7; // point from which the popup should open relative to the iconAnchor [x, y]

var newYorkIcon = L.icon({
    iconUrl: 'images/icons/NewYork_Icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})
var elSegundoIcon = L.icon({
    iconUrl: 'images/icons/ElSegundo_Icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})
var napervilleIcon = L.icon({
    iconUrl: 'images/icons/Naperville_Icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})
var newarkIcon = L.icon({
    iconUrl: 'images/icons/Newark_Icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})
var sanFranciscoIcon = L.icon({
    iconUrl: 'images/icons/SanFrancisco_Icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})

// initialize map
function initMap() {
    //set map view
    var initialView = [39.82, -98.58];
    var map = L.map('map').setView(initialView, 5);
  
    // add base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '© OpenStreetMap contributors',
       maxZoom: 18
    }).addTo(map);

    // define coordinates
    var newYork = L.latLng(40.713192, -73.006065);
    var elSegundo = L.latLng(33.919201, -118.416584);
    var naperville = L.latLng(41.770999, -88.153042);
    var newark = L.latLng(40.732277, -74.173575);
    var sanFrancisco = L.latLng(37.7757, -122.3952);

   // Create a curved line (Leaflet.curve.js)
    var curve1 = L.curve(
        [
          'M', [newYork.lat, newYork.lng],
          'Q', [newYork.lat - 10, newYork.lng - 20], [elSegundo.lat, elSegundo.lng]
        ],
        { color: 'red', fill: false }
    ).addTo(map);

    var curve2 = L.curve(
        [
          'M', [elSegundo.lat, elSegundo.lng],
          'Q', [elSegundo.lat + 8, (elSegundo.lng + naperville.lng) / 2], [naperville.lat, naperville.lng]
        ],
        { color: 'orange', fill: false }
    ).addTo(map);

    var curve3 = L.curve(
        [
          'M', [naperville.lat, naperville.lng],
          'Q', [naperville.lat + 1, (naperville.lng + elSegundo.lng) / 2], [elSegundo.lat, elSegundo.lng]
        ],
        { color: 'yellow', fill: false }
    ).addTo(map);

    var curve4 = L.curve(
        [
          'M', [elSegundo.lat, elSegundo.lng],
          'Q', [elSegundo.lat + 10, (elSegundo.lng + naperville.lng) / 2], [naperville.lat, naperville.lng]
        ],
        { color: 'limegreen', fill: false }
    ).addTo(map);

    var curve5 = L.curve(
        [
          'M', [naperville.lat, naperville.lng],
          'Q', [naperville.lat + 1, (naperville.lng + newark.lng) / 2], [newark.lat, newark.lng]
        ],
        { color: 'blue', fill: false }
    ).addTo(map);

    var curve6 = L.curve(
        [
          'M', [newark.lat, newark.lng],
          'Q', [newark.lat + 9, (newark.lng + sanFrancisco.lng) / 2], [sanFrancisco.lat, sanFrancisco.lng]
        ],
        { color: 'purple', fill: false }
    ).addTo(map);
  
    // Add markers
    L.marker(newYork, { icon: newYorkIcon }).bindPopup('<div><img src="images/flags/NewYorkCity_Flag.png" style="width: 175px; height: auto;"><p><b>New York, NY</b></p><p>Population: 8,468,000</p></div>').addTo(map);
    L.marker(elSegundo, { icon: elSegundoIcon }).bindPopup('<div><img src="images/flags/ElSegundo_Flag.png" style="width: 175px; height: auto;"><p><b>El Segundo, CA</b></p><p>Population: 16,898</p></div>').addTo(map);
    L.marker(naperville, { icon: napervilleIcon }).bindPopup('<div><img src="images/flags/Naperville_Flag.jpg" style="width: 175px; height: auto;"><p><b>Naperville, IL</b></p><p>Population: 149,104</p></div>').addTo(map);
    L.marker(newark, { icon: newarkIcon }).bindPopup('<div><img src="images/flags/Newark_Flag.png" style="width: 175px; height: auto;"><p><b>Newark, NJ</b></p><p>Population: 307,220</p></div>').addTo(map);
    L.marker(sanFrancisco, { icon: sanFranciscoIcon }).bindPopup('<div><img src="images/flags/SanFrancisco_Flag.png" style="width: 175px; height: auto;"><p><b>San Francisco, CA</b></p><p>Population: 815,201</p></div>').addTo(map);
 
}

// Call the initMap function when the document is ready
document.addEventListener('DOMContentLoaded', initMap);