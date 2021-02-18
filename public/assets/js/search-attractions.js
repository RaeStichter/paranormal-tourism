async function SearchFormHandler(event) {
  event.preventDefault();
  console.log("function was reached");
  const location_text = document.querySelector('input[name="attraction-location"]').value.trim();
  console.log(location_text);

  const category_text = document.querySelector(".attraction-category select").value;
  console.log(category_text);

  const type_text = document.querySelector(".attraction-type select").value;
  console.log(type_text);
//-----above was working with the document.event at the bottom
// var script = document.createElement('script');

// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdrgmTD2DFkXNvcS0u0aTjPwtPq_81FiE&callback=initMap';
// script.async = true;

// this is where the fetch to the sreach api will go===============================================
document.location.replace('/api/search?location=' + location_text + '&category=' + category_text + '&type=' + type_text);

// const response = await fetch('api/search?location=' + location_text + '&category=' + category_text + '&type=' + type_text).then(function(response) {
//   if (response.ok) {
//     response.json().then(function(data) {
//       console.log(data);
//     })
//   }
// })


}

// function initMap() {
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 8,
  //   center: { lat: -34.397, lng: 150.644 },
  // });
  // const geocoder = new google.maps.Geocoder();
  // // document.getElementById("submit").addEventListener("click", () => {
  //   geocodeAddress(geocoder, map, location_text);
  // });


// function geocodeAddress(geocoder, resultsMap, location_text) {
//   //const address = location_text;//document.getElementById("address").value;
//   geocoder.geocode({ address: location_text }, (results, status) => {
//     if (status === "OK") {
//       //resultsMap.setCenter(results[0].geometry.location);
//       // new google.maps.Marker({
//       //   map: resultsMap,
//       //   position: results[0].geometry.location,
//       // });
//       var loc = [];
//       loc[0]=results[0].geometry.location.lat();
//       loc[1]=results[0].geometry.location.lng();
//       console.log(loc);

//       document.location.replace(`/attractions/${loc}`);

//     } else {
//       alert("Geocode was not successful for the following reason: " + status);
//     }
//   });
// }



    // if (location_text) {
    //     const response = await fetch('/html/index', {
    //       method: 'GET',
    //       body: JSON.stringify({
    //         location_text
    //       }),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     });

    //     if (response.ok) {
    //         document.location.replace('/attractions');
    //     } else {
    //       alert(response.statusText);
    //     }
    // }
// }

document.querySelector('.search-attraction-form').addEventListener('submit', SearchFormHandler);
