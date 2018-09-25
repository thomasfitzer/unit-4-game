var yourScore = 0;
var wins = 0;
var losses = 0;
var targetScore = [];
var buttonValues = [];
var mossPoints = document.getElementById("moss");
var pagePoints = document.getElementById("page");
var petersonPoints = document.getElementById("peterson");
var franPoints = document.getElementById("fran");


$(document).ready(function(){
  
  targetScore.push(Math.floor(Math.random() * 102) +19);
  
  

  function getRandomValue() {
    let mossPoints = $("#moss");
    let pagePoints = $("#page");
    let petersonPoints = $("#peterson");
    let franPoints = $("#fran");
    let playerArray = [
    mossPoints, pagePoints, petersonPoints, franPoints
  ];
  for (var i = 0; i < buttonValues.length; i++) {

  };
  function getButtonValues(){
    buttonValues.push(Math.floor(Math.random() * 12));
    }
  console.log(playerArray);
  for (i = 0; i < playerArray.length; i++) {
    playerArray[i] = getButtonValues();
  };
  console.log(playerArray);
};
}


 








 
  
  
  $("#moss").on("click", function() {
    yourScore += 10;
    

    });

  $("#page").on("click", function() {

    yourScore += 10;
    
  });

  $("#peterson").on("click", function() {

    yourScore += 10;
    
  });

  $("#fran").on("click", function() {

    yourScore += 10;
    
  });
  
  if (yourScore === targetScore) {
    wins += 1;
    
  } else if (yourScore >= targetScore) {
    losses += 1;
  };










