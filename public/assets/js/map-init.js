// get the lat and long
const loc = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const lat = loc.toString().split(',') [
  loc.toString().split(',').length - 2
];

const lng = loc.toString().split(',') [
  loc.toString().split(',').length - 1
];

var latitude = parseFloat(lat);
var longitude = parseFloat(lng);
// const loct = window.location.toString().split(',')[
//   window.location.toString().split(',').length - 2
// ];

// const lat = loc.toString().split(',')[
//   loc.toString().split(',').length - 1
// ];
console.log(loc);
console.log(latitude);
console.log(longitude);
// console.log(latitude);
// console.log(longitude);
// console.log(lat);
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');

script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdrgmTD2DFkXNvcS0u0aTjPwtPq_81FiE&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7, 
      center: { lat: latitude, lng: longitude }, //39.82916983397753, -98.57990885339983 geographic center of USA
      mapTypeId: "roadmap",
});
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

// loads map as the page loads
let map;
