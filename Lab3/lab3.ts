let map : any;
let index = 0;
//let coolLoc : any[] = [];
let mapMarkers : MapMarker[] = [];
//interface
interface LatLng {
    lat : number,
    lng : number
}
interface GoogleMapsConfig{
    center: string,
    zoom : number
}
//class
class MapMarker {
    Address : string;
    LatLng : LatLng;
    public constructor(address: string){
        this.Address = address;
    };
}

let Toronto : LatLng = { lat: 43.653226, lng: -79.38318429999998};
let initMapConfig : GoogleMapsConfig = { center: Toronto, zoom: 8};

$.ajax ({
    url: './locations.json',
    datatype: 'json',
    success: function (data) {
        for(let cl of data) {
            let newMapMarker : MapMarker = new MapMarker(cl.address);
            mapMarkers.push(newMapMarker);
        }
    }
});

window.onload = function () {
    addMarkerWithGeocoder();
}
function initMap() {
    let geocoder : object = new google.maps.Geocoder();
    map = new google.maps.Map(
        document.getElementById('map'), initMapConfig
    );
    //addMarker(Toronto);
    //getLatLng("1 Yonge Street Toronto, Ontario, Canada");
    /*for(let cl of coolLoc) {
        let newMapMarker : MapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);*/

    }
function addMarkerWithGeocoder() {
    let resultLatlng : LatLng = {lat: 0, lng: 0};

    geocoder = new google.maps.Geocoder();

    if (index < mapMarkers.length) {
        console.log(index);
        let address : string = mapMarkers[index].Address;
        geocoder.geocode(
            {'address': address},
            function (results, status) {

                if (status == 'OK') {
                    index ++;
                    resultLatlng.lat = results[0].geometry.location.lat();
                    resultLatlng.lng = results[0].geometry.location.lng();
                    addMarker(resultLatlng);
                    addMarkerWithGeocoder();
                } else {
                    setTimeout(function(){addMarkerWithGeocoder()}, 500);
                }
            }
        );
    }
}
    function addMarker(coord : LatLng) : void {
        //will place map marker based on coordinates
        let newMarker =  new google.maps.Marker({
            position: coord,
            map: map,
            title: `A cool place to be`
        });
    }

