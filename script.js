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
    var NewYork = L.latLng(40.713192, -73.006065);
    var ElSegundo = L.latLng(33.919201, -118.416584);
    var Naperville = L.latLng(41.770999, -88.153042);
    var Newark = L.latLng(40.732277, -74.173575);
    var SanFrancisco = L.latLng(37.7757, -122.3952);

   // Create a curved line (Leaflet.curve.js)
    var curve1 = L.curve(
        [
          'M', [NewYork.lat, NewYork.lng],
          'Q', [NewYork.lat - 10, NewYork.lng - 20], [ElSegundo.lat, ElSegundo.lng]
        ],
        { color: 'red', fill: false }
    ).addTo(map);

    var curve2 = L.curve(
        [
          'M', [ElSegundo.lat, ElSegundo.lng],
          'Q', [ElSegundo.lat + 8, (ElSegundo.lng + Naperville.lng) / 2], [Naperville.lat, Naperville.lng]
        ],
        { color: 'orange', fill: false }
    ).addTo(map);

    var curve3 = L.curve(
        [
          'M', [Naperville.lat, Naperville.lng],
          'Q', [Naperville.lat + 1, (Naperville.lng + ElSegundo.lng) / 2], [ElSegundo.lat, ElSegundo.lng]
        ],
        { color: 'yellow', fill: false }
    ).addTo(map);

    var curve4 = L.curve(
        [
          'M', [ElSegundo.lat, ElSegundo.lng],
          'Q', [ElSegundo.lat + 10, (ElSegundo.lng + Naperville.lng) / 2], [Naperville.lat, Naperville.lng]
        ],
        { color: 'limegreen', fill: false }
    ).addTo(map);

    var curve5 = L.curve(
        [
          'M', [Naperville.lat, Naperville.lng],
          'Q', [Naperville.lat + 1, (Naperville.lng + Newark.lng) / 2], [Newark.lat, Newark.lng]
        ],
        { color: 'blue', fill: false }
    ).addTo(map);

    var curve6 = L.curve(
        [
          'M', [Newark.lat, Newark.lng],
          'Q', [Newark.lat + 9, (Newark.lng + SanFrancisco.lng) / 2], [SanFrancisco.lat, SanFrancisco.lng]
        ],
        { color: 'purple', fill: false }
    ).addTo(map);
  
    // Add markers
    L.marker(NewYork).bindPopup('<div><img src="images/NewYorkCity_Flag.png" style="width: 175px; height: auto;"><p><b>New York, NY</b></p><p>Population: 8,468,000</p></div>').addTo(map);
    L.marker(ElSegundo).bindPopup('<div><img src="images/ElSegundo_Flag.png" style="width: 175px; height: auto;"><p><b>El Segundo, CA</b></p><p>Population: 16,898</p></div>').addTo(map);
    L.marker(Naperville).bindPopup('<div><img src="images/Naperville_Flag.jpg" style="width: 175px; height: auto;"><p><b>Naperville, IL</b></p><p>Population: 149,104</p></div>').addTo(map);
    L.marker(Newark).bindPopup('<div><img src="images/Newark_Flag.png" style="width: 175px; height: auto;"><p><b>Newark, NJ</b></p><p>Population: 307,220</p></div>').addTo(map);
    L.marker(SanFrancisco).bindPopup('<div><img src="images/SanFrancisco_Flag.png" style="width: 175px; height: auto;"><p><b>San Francisco, CA</b></p><p>Population: 815,201</p></div>').addTo(map);
 
}

// Call the initMap function when the document is ready
document.addEventListener('DOMContentLoaded', initMap);