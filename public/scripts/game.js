var socket = io();

let gameState = {
  phase: "",
  selectionType: "",
  selection: {
    to: null,
    from: null,
    amount: null,
    attackType: null,
  },
  activePlayers: [],
  activePlayer: null,
  turnIndex: 0,
  draftAmount: 0,
  settings: {
    mapName: "",
  },
  mapState: [],
};

let selectedAmount = 0;

let gameStateSetup = false;

let territories = [];

let map = {};

let maps = [];

let user = {};

let buttons = {};

let cards = [];
let selectedCards = [];
const cardMapping = ["Infantry", "Cavalry", "Artillery"];

let showCards = false;

let showCont = false;

let mapScale;
let toMapScale;
let zoomSpeed;
let zoomCenterX = null;
let zoomCenterY = null;

let mapXPos;
let mapYPos;
let toMapXPos;
let toMapYPos;

function preload() {
  mapBackground = loadImage("assets/map_background.jpg");
  leftArrow = loadImage("assets/left_arrow.png");
  rightArrow = loadImage("assets/right_arrow.png");
  check = loadImage("assets/check.png");
  cancel = loadImage("assets/cancel.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pickUserSetup();
  mapScale = 1;
  toMapScale = 1;
  zoomSpeed = 0.05;

  mapXPos = -width / 2;
  toMapXPos = -width / 2;
  mapYPos = -height / 2;
  toMapYPos = -height / 2;

  addButtons();

  var options = {
    preventDefault: true,
  };
  var hammer = new Hammer(document.body, options);

  hammer.get("pinch").set({ enable: true });

  hammer.on("pinch", mobileZoom);
}

//Socket.IO Events Emitting
function submitUser() {
  socket.emit("userSelected", userInput.value());
}

function startGame() {
  socket.emit("startGame");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (gameState.phase === "SETTINGS") {
    pickSettings();
  }

  if (
    gameState.phase == "DRAFT" ||
    gameState.phase == "ATTACK" ||
    gameState.phase == "FORTIFY"
  ) {
    if (startGameButton) {
      startGameButton.remove();
    }

    drawMap();

    drawUI();
  }
}

function pickUserSetup() {
  userInput = createInput();
  userInput.size(windowWidth / 5, 50);
  userInput.center();
  userInput.position(null, 230);
  userInput.addClass("inputUser");

  submitUserButton = createButton("Submit");
  submitUserButton.size(windowWidth / 5, 40);
  submitUserButton.center();
  submitUserButton.position(null, 310);
  submitUserButton.addClass("submitUser");
  submitUserButton.mousePressed(submitUser);

  userText = createElement("h1", "Enter Your Name");
  userText.center();
  userText.position(null, 150);
}

function pickSettingsSetup() {
  userInput.remove();
  submitUserButton.remove();
  userText.remove();

  startGameButton = createButton("Start Game");
  startGameButton.size(windowWidth / 5, 40);
  startGameButton.center();
  startGameButton.position(null, windowHeight - 100);
  startGameButton.addClass("startGame");
  startGameButton.mousePressed(startGame);
}

function pickSettings() {
  var userIndex = 0;
  rectMode(CENTER);

  if (gameState.activePlayers != null) {
    gameState.activePlayers.forEach((user) => {
      fill(user.color);
      stroke("none");
      rect(windowWidth / 2, 50 * userIndex + 100, windowWidth / 3, 35, 4);
      stroke("black");
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(user.name, windowWidth / 2, 50 * userIndex + 100);
      userIndex++;
    });
  }
}

function mouseDragged() {
  toMapXPos += (mouseX - pmouseX) / mapScale;
  toMapYPos += (mouseY - pmouseY) / mapScale;
}

function mouseWheel(event) {
  toMapScale += zoomSpeed * event.delta;
  toMapScale = constrain(toMapScale, 1, 3);
}

function mobileZoom(event) {
  toMapScale = event.scale;
  toMapScale = constrain(toMapScale, 1, 3);
}
