/* 
    JavaScript for Assignment 3.2: User Input Validation
    Handles name and zip code validation.
*/

function validateInput() {
    // Get values from the input fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var zipCode = document.getElementById("zipCode").value;
    var message = document.getElementById("message"); // To display validation messages

    // Clear any previous messages
    message.innerHTML = "";

    // Combine first and last name
    var fullName = firstName + " " + lastName;

    // Check if full name is more than 20 characters
    if (fullName.length > 20) {
        message.innerHTML = "Name must be 20 characters or less. Please shorten your name.";
        return; // Stop further validation if the name is too long
    }

    // Check if zip code is exactly 5 digits long and is a number
    if (zipCode.length !== 5 || isNaN(zipCode)) {
        message.innerHTML = "Please enter a valid 5-digit zip code.";
        return; // Stop further validation if zip code is invalid
    }

    // If everything is valid, display the secret message
    message.innerHTML = "Congratulations! You've entered valid information.";
}
