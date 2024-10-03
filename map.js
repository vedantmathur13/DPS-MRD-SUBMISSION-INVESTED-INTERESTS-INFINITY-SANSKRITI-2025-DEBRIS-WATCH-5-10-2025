document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map with a fixed zoom level
    const map = L.map('map', {
        center: [20, 0], // Latitude and Longitude centered over the world
        zoom: 3, // Fixed zoom level
        maxBounds: [[-90, -180], [90, 180]], // Limit the map view to avoid wrapping
        maxZoom: 19, // Maximum zoom level
        minZoom: 2 // Minimum zoom level
    });

    // Add OpenStreetMap tiles with noWrap option
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
        noWrap: true // Prevent horizontal wrapping
    }).addTo(map);

    // Create a marker and add it to the map
    const marker = L.marker([20, 0]).addTo(map)
        .bindPopup('Space Debris Location')
        .openPopup();

    // Function to update marker position and tracked count
    function updateMap() {
        // Generate random coordinates for demonstration purposes
        const randomLat = (Math.random() * 180 - 90).toFixed(6);
        const randomLng = (Math.random() * 360 - 180).toFixed(6);

        // Update the marker's position without changing the map view
        marker.setLatLng([randomLat, randomLng]).bindPopup('Updated Space Debris Location').openPopup();

        // Update the tracked objects count
        const trackedCount = document.getElementById('trackedCount');
        trackedCount.textContent = Math.floor(Math.random() * 1000);
    }

    // Initial marker update
    updateMap();

    // Set interval to update the marker every minute (60000 milliseconds)
    setInterval(updateMap, 10000);
});

// JavaScript for parallax scrolling effect
window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;

  // Select all layers and adjust their positions based on scroll speed
  document.querySelectorAll('.parallax-layer').forEach(function(layer) {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});