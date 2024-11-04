/* 
    JavaScript for Assignment 3.2: User Input Validation
    This script handles the input validation and displays a secret message if all conditions are met.
*/

function validateInputs() {
    // Get the values of the first name, last name, and zip code from the form
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var zipCode = document.getElementById("zipCode").value.trim();

    // Combine first name and last name with a space in between
    var fullName = firstName + " " + lastName;

    // Check if the combined name length is more than 20 characters
    if (fullName.length > 20) {
        alert("Name must be 20 characters or less. Please shorten your name.");
        return; // Stop the function if the name is too long
    }

    // Check if the zip code has exactly 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        alert("Zip code must be exactly 5 digits.");
        return; // Stop the function if the zip code is invalid
    }

    // If all validations pass, show the secret message
    document.getElementById("secretMessage").style.display = "block";
}
