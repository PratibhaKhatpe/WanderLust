
const mapData = document.getElementById("map-data");

const coordinates = JSON.parse(
    mapData.dataset.coordinates
);

const title = mapData.dataset.title;


const map = L.map("map").setView(
    [coordinates[1], coordinates[0]],
    13
);


L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map);


const marker = L.marker([
    coordinates[1],
    coordinates[0]
]).addTo(map);


marker.bindPopup(title).openPopup();