function submitData(name, email) {
    // Definin the data to be sent in the request body
    const formData = {
        name: "Steve",
        email: "steve@steve.com"
    };

    // Create the configuration object for the fetch request
    const configurationObject = {
        method: "POST", // Specify the request method
        headers: {
            "Content-Type": "application/json", // Define the content type of the request
            "Accept": "application/json" // Specify the format of the response we expect
        },
        body: JSON.stringify(formData) // Convert the form data to a JSON string
    };

    // Make the fetch request to the server
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => {
            // Check if the response is OK (status in the range 200-299)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the response body as JSON
        })
        .then(object => {
            // Append the new user's ID to the DOM
            document.body.innerHTML += `<p>${object.id}</p>`;
        })
        .catch(error => {
            // Append the error message to the DOM
            document.body.innerHTML += `<p>${error.message}</p>`;
        });
}
