// Gets user's current location, if supported by their browser
function getLocation() {
    if (navigator.geolocation) {
        // Get current position, send it to the getResults function
        navigator.geolocation.getCurrentPosition(getResults);
    } else {
        // If not supported by browser, send an alert to their screen
        alert('Geolocation is not supported by your browser.');
    }
}

// Handles the position retrieved in getLocation()
function getResults(position) {
    // Display position to user in an alert
    alert('Searching from\nLatitude: ' + position.coords.latitude + '\nLongitude: ' + position.coords.longitude);

    // Index of last '/' in the url
    var index = window.location.href.lastIndexOf('/');
    // Redirect the page by replacing the last /___ with where we want to go
    var url = window.location.href.slice(0, index) + '/results_sample.html'
    window.location.href = url;
}