async function SearchFormHandler(event) {
    event.preventDefault();
    console.log("function was reached");
    const location_text = document.querySelector('input[name="attraction-location"]').value.trim();
    
    if (location_text) {
        const response = await fetch('/html/index', {
          method: 'GET',
          body: JSON.stringify({
            location_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
            document.location.replace('/attractions');
        } else {
          alert(response.statusText);
        }
    }
}
  
document.querySelector('.search-attraction-form').addEventListener('submit', SearchFormHandler);