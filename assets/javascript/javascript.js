var config = {
  apiKey: "AIzaSyCflOEyUStDPWhuIQtJrdOSzIhSBAeserE",
  authDomain: "tictactony-a6298.firebaseapp.com",
  databaseURL: "https://tictactony-a6298.firebaseio.com",
  projectId: "tictactony-a6298",
  storageBucket: "tictactony-a6298.appspot.com",
  messagingSenderId: "337189598233"
};
firebase.initializeApp(config);

gameDb = firebase.database();


var playerOne = "X";
var playerTwo = "O";
var playerOneWins = 0;
var playerTwoWins = 0;
var playerOneLoses = 0;
var playerTwoLoses = 0;
var tie = 0;
var progress = 9;

//game firebase start place a place a player into the db
function recordGame(){
gameDb.ref().push({
  playerOne: playerOneTony,
  playerTwo: playerTwoTony
});
}

var arrayOfTonys = [
  "Tony Soprano",
  "Tony The Tiger",
  "Tony Montana",
  "Tony Hawk",
  "Iron Man",
  "Tony Danza",
  "Tony Bennett",
  "Tony Jaa",
  "Anthony Hopkins",
  "Fat Tony"
];

//use chance to grab an index

//needs a button

//change to random on function


playerOneTony = "";
playerTwoTony = "";

var gameOver = false;

var playerOneSquares = {
  tLeft: 0,
  tCenter: 0,
  tRight: 0,
  left: 0,
  center: 0,
  right: 0,
  bLeft: 0,
  bCenter: 0,
  bRight: 0
};

var playerTwoSquares = {
  tLeft: 0,
  tCenter: 0,
  tRight: 0,
  left: 0,
  center: 0,
  right: 0,
  bLeft: 0,
  bCenter: 0,
  bRight: 0
};


function random(){
  chance.integer({min: 1, max: 9});
};
//fires when user clicks p1 p2
//needs a button

//change to random on function
function tonyRandom() {
  i = chance.integer({ min: 0, max: 9 });
  j = chance.integer({ min: 0, i, max: 9 });
  playerOneTony = arrayOfTonys[i];
  playerTwoTony = arrayOfTonys[j];
  console.log(playerOneTony, playerTwoTony);
  

}

//computer choice
function randomComputer (){
 if (compChoice === selected){

 }

 }

//which player starts
function whoStarts() {
  var coinFlip = chance.coin();
  console.log(coinFlip)
  if (coinFlip === "heads") {
    //user
  } else {
    //user2
  }
}

//function playerOneSelect(event) {
//$("#choice").click(function (event) {
//tonyRandom();
//if (playerOne === "X") {
//$(this).append(playerOneTony)
//}
//if (playerOne === "O") {
//$(this).append(playerOneTony)
//}
//});
//}

//function playerTwoSelect(event) {
//$("#choice").click(function (event) {
//tonyRandom();
//if (playerTwo === "X") {
//$(this).append(playerTwoTony)
//}
//if (playerTwo === "O") {
//$(this).append(playerTwoTony)
//}
//});
//}

$(document).ready(function () {
  var arrayOfTonys = [
    "Tony Soprano",
    "Tony The Tiger",
    "Tony Montana",
    "Tony Hawk",
    "Iron Man",
    "Tony Danza",
    "Tony Bennett",
    "Tony Jaa",
    "Anthony Hopkins",
    "Fat Tony"
  ];
  //change to random on function
  function tonyRandom() {
    i = chance.integer({ min: 0, max: 9 });
    j = chance.integer({ min: 0, i, max: 9 });
    playerOneTony = arrayOfTonys[i];
    playerTwoTony = arrayOfTonys[j];
    console.log(playerOneTony, playerTwoTony);
  };

  $(document).on('click', 'a', function () {
    //value of playerOneTony on button
    var playerOneTony = $(this).html();
    console.log(playerOneTony);
    //API with key, limit of 10, and rating of G.
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + playerOneTony + "&api_key=NT48m4Vbdp0xJS0bh8cJv7zdIA0X4y8X&limit=10&rating=R";
    console.log(queryURL);
    // AJAX Function to API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var results = response.data;
      console.log(results);
      //jQuery to empty div.
      $('.btn').empty();
      //For loop for images retrieved
      for (var j = 0; j < results.length; j++) {
        var imageView = results[j].images.fixed_height.url;
        var still = results[j].images.fixed_height_still.url;
        console.log(imageView);
        var gifImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
        gifImage.attr('data-state', 'still');
        $('.btn').append(gifImage);
        gifImage.on('click', playGif);
      }
    });
    //Function for still and animate .gis retrieved.
    function playGif() {
      var state = $(this).attr('data-state');
      console.log(state);
      if (state == 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
      }
      else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
      }
    }
  });
});
// psydocode
progress--;
function game() {
  if (
    playerOneSquares === (tLeft + tCenter + tRight === 3) ||
    left + center + right === 3 ||
    bLeft + bCenter + bRight === 3 ||
    tLeft + left + bLeft === 3 ||
    tCenter + center + bCenter === 3 ||
    tRight + right + bRight === 3 ||
    tLeft + center + bRight === 3 ||
    tRight + center + bLeft === 3
  ) {
    playerOneWins++;
    playerTwoLoses++;
    gameOver = true;
  } else if (
    playerTwoSquares === (tLeft + tCenter + tRight === 3) ||
    left + center + right === 3 ||
    bLeft + bCenter + bRight === 3 ||
    tLeft + left + bLeft === 3 ||
    tCenter + center + bCenter === 3 ||
    tRight + right + bRight === 3 ||
    tLeft + center + bRight === 3 ||
    tRight + center + bLeft === 3
  ) {
    playerTwoWins++;
    playerOneLoses++;
    gameOver = true;
  } else {
    if (progress > 0) {
      gameOver = false;
    } else {
      gameOver = true;
      tie++;
    }
  }
}

$(document).ready(function () {
  console.log("ready!");
  tonyRandom();

  playerOneSelect();
  console.log(playerOneSelect);
  playerTwoSelect();
  console.log(playerTwoSelect);

  whoStarts();

});
