if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice(){
    let randomNumber1 = Math.floor(6 * Math.random()) + 1; //select from pseudo whole No from 1-6.
    let randomNumber2 = Math.floor(6 * Math.random()) + 1;

    let randomImageSource1 = "images/dice" + randomNumber1 + ".png" ;/*using the random No variable to select 
                                                                a dice image randomly from the source (dice1-dice6)*/
    let randomImageSource2 = "images/dice" + randomNumber2 + ".png";


    let image1 = document.querySelectorAll("img")[0]; //select the first image from html document
    let image2 = document.querySelectorAll("img")[1]; //select the second image from html document

    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);

    changeHeading(randomNumber1, randomNumber2);
}

function changeHeading(num1, num2) {
    let message;
    if (num1 > num2) {//if player 1 wins
    message = "🚩 Player 1 Wins";
    }
    else if (num1 < num2) {//if player 2 wins
    message = "🚩 player 2 Wins";
    }
    else{//if there is a draw
    message = "draw!";
}
    document.querySelector("h1").innerHTML = message;
}