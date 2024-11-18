// Function to flip a coin for both players and display the result
function flipcoin() {
    // Generate random numbers for player 1 and player 2 (1 = heads, 2 = tails)
    var player1 = Math.ceil(Math.random() * 2);
    var player2 = Math.ceil(Math.random() * 2);
    
    var headsImage = "images/Heads.png.jpeg";
    var tailsImage = "images/tails.png.jpeg";
    
    // Player 1 results
    if (player1 === 1) {
        document.getElementById("player1Img").src = headsImage;
    } else {
        document.getElementById("player1Img").src = tailsImage;
    }

    // Player 2 results
    if (player2 === 1) {
        document.getElementById("player2Img").src = headsImage;
    } else {
        document.getElementById("player2Img").src = tailsImage;
    }

    // Determine the final result
    var result = (player1 === player2) ? "It's a tie!" : (player1 === 1 ? "Player 1 wins!" : "Player 2 wins!");
    document.getElementById("finalResult").textContent = result;
}
