var changeX = 5; // Horizontal speed
var changeY = 5; // Vertical speed
var intervalID = 0;

function intervalStart() {
    // Enable/Disable buttons
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;

    var image = document.getElementById("imgMeme");

    // Start the movement
    intervalID = setInterval(function () {
        // Get the current position of the image
        var currentLeft = parseInt(image.style.left) || 0; // Current X position
        var currentTop = parseInt(image.style.top) || 0;   // Current Y position

        // Update the position
        var newLeft = currentLeft + changeX;
        var newTop = currentTop + changeY;

        // Check for boundaries
        if (newLeft + image.width > window.innerWidth || newLeft < 0) {
            changeX = -changeX; // Reverse direction horizontally
        }
        if (newTop + image.height > window.innerHeight || newTop < 0) {
            changeY = -changeY; // Reverse direction vertically
        }

        // Move the image
        image.style.left = newLeft + "px";
        image.style.top = newTop + "px";
    }, 100); // Slower speed (100ms interval)
}

function intervalStop() {
    // Enable/Disable buttons
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;

    // Stop the movement
    clearInterval(intervalID);
}
