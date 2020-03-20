function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });


    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let locations = [
        { lat: 53.350140, lng: -6.266155 },
        { lat: 53.350140, lng: -6.266155 },
        { lat: 53.350140, lng: -6.266155 }
    ];

    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    let markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}