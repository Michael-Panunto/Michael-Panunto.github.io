function initMap() {
    // The hardcoded results
    var canlan_cornwall_oakville = { lat: 43.488591, lng: -79.648442 }
    var canlan_marting_etobicoke = { lat: 43.700265, lng: -79.575884 }

    // Create a map centered on the Oakville location defined above.
    // The style comes from Google's tutorial and changes the map to a dark mode
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10, 
            center: canlan_cornwall_oakville, 
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]
        }
    );

    // Create markers for the arena locations
    var canlan_cornwall_oakville_marker = new google.maps.Marker({ position: canlan_cornwall_oakville, map: map, });
    var canlan_marting_etobicoke_marker = new google.maps.Marker({ position: canlan_marting_etobicoke, map: map });

    // Content for Oakville InfoWindow
    var oakville_content = '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Canlan Ice Sports</h1>' + 
        '<div id="bodyContent">' + 
        '<p>Hockey Arena, located at 2300 Cornwall Rd, Oakville, ON.</p>' + 
        '<p>Rated 4.3 Stars</p>' + 
        '<a href="./individual_sample.html">View More</a>' + 
        '</div>' +
        '</div>'
    ;

    // Content for Etobicoke InfoWindow
    var etobicoke_content = '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Canlan Ice Sports</h1>' + 
        '<div id="bodyContent">' + 
        '<p>Hockey Arena, located at 1120 Martin Grove Rd, Etobicoke, ON.</p>' + 
        '<p>Rated 4.1 Stars</p>' + 
        '<a href="./individual_sample.html">View More</a>' + 
        '</div>' +
        '</div>'
    ;

    // Create InfoWindows for both markers, using the string content created ^
    var oakville_info_window = new google.maps.InfoWindow({
        content: oakville_content
    });

    var etobicoke_info_window = new google.maps.InfoWindow({
        content: etobicoke_content
    });

    // Add click listeners for both markers that will display the InfoWindow
    canlan_cornwall_oakville_marker.addListener('click', function() {
        oakville_info_window.open(map, canlan_cornwall_oakville_marker);
    });

    canlan_marting_etobicoke_marker.addListener('click', function() {
        etobicoke_info_window.open(map, canlan_marting_etobicoke_marker);
    });
}

