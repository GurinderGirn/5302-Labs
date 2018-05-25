var map;
var Toronto = { lat: 43.653226, lng: -79.38318429999998 };
var initMapConfig = { center: Toronto, zoom: 8 };
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), initMapConfig);
}
