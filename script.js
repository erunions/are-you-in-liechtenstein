"use strict";

const result = document.getElementById('result');
const liechtenstein = document.getElementById('liechtenstein');

function createMap(position) {
    const {longitude, latitude} = position.coords;
    //map
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [longitude, latitude],
        zoom: 13
    });
    //marker
    var marker = new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);

    result.style.display = 'block';
    liechtenstein.style.display = 'inline-block';
}

function errorHandler() {
    console.log('Geolocation error');
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(createMap, errorHandler);
} else {
    console.log('Geolocation is not supported by your browser');
}

mapboxgl.accessToken = `pk.eyJ1IjoibGllY2h0ZW5zdGllbmZhbjIiLCJhIjoiY2wyNTRiajZqMW0wdjNpanJwYnN2dXQ5ZiJ9.Li9sZfg5_t0TzjBuhcUdRQ`;