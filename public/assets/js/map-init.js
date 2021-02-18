// const { data } = require('./search-attractions');
// console.log("MAP-INT has been reached!");
// console.log(data);
// const lat_text = document.querySelector('#attraction-lat');
// const lng_text = document.querySelector('#attraction-lng');
// console.log(lat_text.textContent, lng_text.textContent);

// const lat = lat_text.textContent;
// const lng = lng_text.textContent;
// console.log(lat, lng);
// Set up arrays for the incoming lat lng data:
//const lat = ['39.82916983397753'];
//const lgn = ['-98.57990885339983'];



var script = document.createElement('script');

script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdrgmTD2DFkXNvcS0u0aTjPwtPq_81FiE&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function initMap() {
  //for (let i = 0; i < lat.length; i++){
    const lat_text = document.querySelector('#attraction-lat');
    const lng_text = document.querySelector('#attraction-lng');

    const lat = lat_text.textContent;
    const lng = lng_text.textContent;

    const latLng = new google.maps.LatLng(lat, lng);
    //const latLng = { lat: lat[i], lng: lng[i] };
    // locate on the map
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9, 
      center: latLng, //39.82916983397753, -98.57990885339983 geographic center of USA
      mapTypeId: "roadmap"
    });
    new google.maps.Marker({
      position: latLng,
      map
    });
 //}
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
//}
// loads map as the page loads
let map;
