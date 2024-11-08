/* 
   Assignment 4.2: Incorporate Audio
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
// This is the code that you gave for the JS to play the sound from our file
function sound(src)
{// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }
}
// This is for the play and stop function and the stop button will reload the page
function play()
{
    mySound= new sound("retro-game.wav");
    mySound.play()
}
function stop()
{
    window.location.reload();
}