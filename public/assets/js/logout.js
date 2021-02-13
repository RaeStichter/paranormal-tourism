async function logout(event) {
    event.preventDefault();

    const response = await fetch('/api/user/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log('logged out');
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('#logout').addEventListener('click', logout);