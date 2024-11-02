/* 
    JavaScript for Assignment 3.1: Palindrome Checker
    This script handles the palindrome checking functionality.
*/

// Function to check if the input string is a palindrome
function checkPalindrome() {
    // Clear previous result
    document.getElementById("result").innerText = ""; 

    // Get the user input from the text box
    var input = document.getElementById("userInput").value; 
    // Remove spaces and convert to lowercase for comparison
    var cleanedInput = input.replace(/\s+/g, '').toLowerCase(); 
    // Reverse the cleaned input string
    var reversedInput = cleanedInput.split('').reverse().join(''); 

    // Check if the cleaned input is equal to its reverse
    if (cleanedInput === reversedInput) {
        // Display success message if it is a palindrome
        document.getElementById("result").innerText = '"' + input + '" is a palindrome!';
    } else {
        // Display failure message if it is not a palindrome
        document.getElementById("result").innerText = '"' + input + '" is not a palindrome.';
    }
}
