async function SearchFormHandler(event) {
    event.preventDefault();
  
    const location = document.querySelector('input[name="attraction-location"]').value.trim();
    // const id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    // ];
    const response = await fetch(`/api/attractions`, {
      method: 'GET',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
        // displays all of the attractions
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.search-attraction-form').addEventListener('submit', SearchFormHandler);