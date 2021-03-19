
// --- Init Section Begin -------------------------------------------------------------------------------------
let ownerToken = 'sk.eyJ1IjoicmFkMjkwOSIsImEiOiJja21nZ3ZqbXgwam5tMnBzMHU5bzhoMHVoIn0.gJWBLzmtxisaICv451dO8w';
let startCoordinates = [50.45096494855393, 30.522599283715365];
let startScale = 20;
let currentMap = L.map('usermap').setView(startCoordinates, startScale);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox/streets-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ownerToken,
}).addTo(currentMap);
// --- Init Section End -------------------------------------------------------------------------------------

let gckCoordinates = [50.4501100225011, 30.523400378209004]; // Geographic Center of Kiev
let miCoordinates = [50.449587281615024, 30.525390351819247]; // Monument of Independence

let marker1 = L.marker(startCoordinates).addTo(currentMap); //Maydan Nezaleghnosti

