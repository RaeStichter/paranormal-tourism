// Create the script tag, set the appropriate attributes
var script = document.createElement('script');

script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdrgmTD2DFkXNvcS0u0aTjPwtPq_81FiE&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3.8,
      center: { lat: 39.829169, lng: -98.579908 }, //39.82916983397753, -98.57990885339983 geographic center of USA
      mapTypeId: "roadmap",
});
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

// loads map as the page loads
let map;
