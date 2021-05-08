var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;

var car1, car2, car3, car4, cars;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white")
  if(playerCount == 4){
    game.update(1)
  }
  if(gameState == 1){
    game.play()
  }
}
