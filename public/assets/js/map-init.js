const lat = document.querySelector('#attraction-lat');
const lng = document.querySelector('#attraction-lng');
console.log(lat.textContent, lng.textContent);


// image_categories = [
//     {category: 'Aliens', imgPath: '/images/alien-for-icon.png'},
//     {category: 'Cryptids', imgPath: '/images/bigfoot-for-icon.png'},
//     {category: 'Hauntings', imgPath: '/images/ghost-for-icon.png'},
//     {category: 'Witches', imgPath: '/images/witchIcon.png'}
// ];

// console.log(image_categories);

// const result = image_categories.find( ({category}) => category === type.textContent);
// console.log(result.imgPath);


// var img = document.createElement("img");
// img.src = result.imgPath;
// var src = document.getElementById("category-image");
// src.appendChild(img);



var script = document.createElement('script');

script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdrgmTD2DFkXNvcS0u0aTjPwtPq_81FiE&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7, 
      center: { lat: latitude, lng: longitude }, //39.82916983397753, -98.57990885339983 geographic center of USA
      mapTypeId: "roadmap"
    });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
//}
// loads map as the page loads
let map;
