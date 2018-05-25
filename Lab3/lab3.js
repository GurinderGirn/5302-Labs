var map;
var index = 0;
//let coolLoc : any[] = [];
var mapMarkers = [];
//class
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    ;
    return MapMarker;
}());
var Toronto = { lat: 43.653226, lng: -79.38318429999998 };
var initMapConfig = { center: Toronto, zoom: 8 };
$.ajax({
    url: './locations.json',
    datatype: 'json',
    success: function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            var newMapMarker = new MapMarker(cl.address);
            mapMarkers.push(newMapMarker);
        }
    }
});
window.onload = function () {
    addMarkerWithGeocoder();
};
function initMap() {
    var geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), initMapConfig);
    //addMarker(Toronto);
    //getLatLng("1 Yonge Street Toronto, Ontario, Canada");
    /*for(let cl of coolLoc) {
        let newMapMarker : MapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);*/
}
function addMarkerWithGeocoder() {
    var resultLatlng = { lat: 0, lng: 0 };
    geocoder = new google.maps.Geocoder();
    if (index < mapMarkers.length) {
        console.log(index);
        var address = mapMarkers[index].Address;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                index++;
                resultLatlng.lat = results[0].geometry.location.lat();
                resultLatlng.lng = results[0].geometry.location.lng();
                addMarker(resultLatlng);
                addMarkerWithGeocoder();
            }
            else {
                setTimeout(function () { addMarkerWithGeocoder(); }, 500);
            }
        });
    }
}
function addMarker(coord) {
    //will place map marker based on coordinates
    var newMarker = new google.maps.Marker({
        position: coord,
        map: map,
        title: "A cool place to be"
    });
}
