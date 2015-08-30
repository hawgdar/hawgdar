var marker = null;
var map = null;

var initialized = false;

function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        //center: new google.maps.LatLng(48.7, -122.5),
        center: new google.maps.LatLng(42.7, 40.9),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        styles: [ { "featureType": "water", "stylers": [ { "visibility": "on" }, { "hue": "#00ccff" }, { "saturation": -49 }, { "lightness": -13 }, { "gamma": 2.13 } ] },{ "featureType": "road", "stylers": [ { "visibility": "simplified" }, { "hue": "#ff0000" }, { "lightness": -50 }, { "weight": 0.5 } ] },  { "featureType": "road", "elementType": "labels", "stylers": [ { "visibility": "off" } ] } ]
    };
    map = new google.maps.Map(mapCanvas, mapOptions);
    initialized = true;
}
google.maps.event.addDomListener(window, 'load', initialize);

var all_markers = {};

function markerOptions(unit_id, player_id, latLng, map) {
    if (unit_id == player_id) {
        return { position: latLng, map: map, icon: icons['a-10c']['blue'] };
    } else {
        return { position: latLng, map: map, icon: icons['su-27']['red'] };
    }
}

function invalidate(markerObjs) {
    // Set 'recent' to false on all units so we know which ones have stopped
    // reporting recent data (they ded).
    for (var unit_id in markerObjs) {
        markerObjs[unit_id]['recent'] = false;
    }
}

function reapOld(markerObjs) {
    // After getting the most recent round of data, remove markers still
    // labelled invalid.
    for (var unit_id in markerObjs) {
        if (!markerObjs[unit_id]['recent']) {
            markerObjs[unit_id]['marker'].setMap(null);
            delete markerObjs[unit_id];
        }
    }
}

function updateMarker() {
    if (!initialized) {
        return;
    }

    //var data = getData();
    var url = '/hawgdar/data';
    $.get(url, function(data) {
        console.log(JSON.stringify(data));

        var player_id = data['player_id'];
        var d = data['full_details'];

        invalidate(all_markers);
        for (var unit_id in d) {
            var lat = d[unit_id]['LatLongAlt']['Lat'];
            var lng = d[unit_id]['LatLongAlt']['Long'];
            var latLng = new google.maps.LatLng(lat, lng);

            if (!all_markers.hasOwnProperty(unit_id)) {
                // New unit: create marker with given properties and add to object
                var unitMarker = new google.maps.Marker(markerOptions(unit_id, player_id, latLng, map));
                all_markers[unit_id] = {marker: unitMarker, recent: true};
            } else {
                // Existing unit: update marker with this unit id
                all_markers[unit_id]['marker'].setPosition(latLng);
                all_markers[unit_id]['recent'] = true;
            }

            if (unit_id == player_id) {
                map.setCenter(latLng);
            }
        }
        reapOld(all_markers);
    });
}

setInterval(function() { updateMarker(); }, 1000);
