function firstfunc()
{
    // this is just for pracice to learn how to do it
    alert ("you have created your first function");
}

function average(num1, num2)
{
    var avg=(num1+num2)/2.0;
    alert("average = " + avg);
}

function flipcoin()
{
    var heads= Math.ceil(Math.random()*2);
    var tails= Math.ceil(Math.random()*2);
    var headsImage="Heads.png.jpeg";
    var tailsImage="tails.png.jpeg";
    document.getElementById("finalResult").innerHTML="updates"

    if(player1 == 1)
    {
        document.getElementById("player1Img").src=headsImage;
    }
    else if(player1 ==2)
    {
        document.getElementById("player1Img").src=tailsImage;
    }

    if(player2 == 1)
        {
            document.getElementById("player2Img").src=headsImage;
        }
        else if(player2 ==2)
        {
            document.getElementById("player2Img").src=tailsImage;
        }
    if(player1 == player2)
    {
        document.getElementById("finalResult").innerHTML="DRAW"
    }
    else if((player1 ==1 && player2 == 2) || (player2 == 2 && player1 ==1))
    {
        document.getElementById("finalResult").innerHTML="player 1 loses";
    }
    else
    document.getElementById("finalResult").innerHTML="player 1 wins";

}