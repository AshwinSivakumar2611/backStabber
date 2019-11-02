var database;
var gameState=0
var playerCount;
var form,player,game;
var welcomeScreen,homeScreen,sampleMap;
var allPlayers,plr;
var player1,player2,player3,player4,players;

function preLoad(){
    welcomeScreen = LoadImage("./images/WelcomeScreen.png");
    homeScreen = LoadImage("./images/HomeScreen.png");
    sampleMap = LoadImage("./images/SampleMap.png");
}

function setup(){
    database = firebase.database();
    createCanvas(displayHeight-20,displayWidth-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if (playerCount===4){
        game.updateState(1);
    }
    if (gameState===1){
        game.play();
    }
    drawSprites();
}