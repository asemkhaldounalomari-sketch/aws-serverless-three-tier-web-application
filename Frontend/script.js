async function fetchUserData() {
    const userId = document.getElementById('userId').value;
    if (!userId) {
        alert('Please enter a User ID');
        return;
    }

    try {
        const response = await fetch(`https://wspva3gm9e.execute-api.us-west-2.amazonaws.com/prod/Users?userID=${userId}`);
        const data = await response.json();
        const userDetails = document.getElementById('userDetails');

        if (response.ok) {
            userDetails.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } else {
            userDetails.innerHTML = `<p>${data.message || 'Error fetching data'}</p>`;
        }
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}
