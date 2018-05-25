let map : any;

//interface
interface LatLng {
    lat : number,
    lng : number
}
interface GoogleMapsConfig {
    center : LatLng,
    zoom : number
}

let Toronto : LatLng = { lat: 43.653226, lng: -79.38318429999998};
let initMapConfig = { center: Toronto, zoom: 8};
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), initMapConfig);
}