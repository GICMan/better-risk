const fs = require("fs");
const path = require("path");

const utils = require("./utils");

const userSelected = require("./actions/user.js");
const startGame = require("./actions/start");
const startTurn = require("./actions/turn.js");
const miscActions = require("./actions/misc.js");

const draftActions = require("./actions/draft");
const attackActions = require("./actions/attack.js");
const fortifyActions = require("./actions/fortify.js");

let gameState = {
  phase: "SETTINGS",
  selectionType: "FROM",
  selection: {
    to: null,
    from: null,
  },
  activePlayers: [],
  activePlayer: null,
  turnIndex: 0,
  maxDice: 0,
  connectedTerritories: [],
  draftAmount: 0,
  settings: {
    mapName: "",
  },
  receiveCard: false,
  mapState: [],
  winner: null,
};

var clients = [];
var maps = [];
var map = {};
var cardDeck = [];
var playerCards = [];
var users = require("./users.json");

module.exports = function (io, socket) {
  //-----GATHER MAPS-----\\
  maps = fs.readdirSync(path.join(__dirname, "/public/maps"));

  //-----SELECT USER ACTION-----\\
  socket.on("userSelected", (userName) => {
    var newState = userSelected(
      userName,
      gameState,
      users,
      clients,
      map,
      maps,
      socket,
      playerCards
    );
    if (newState) {
      clients = newState.clients;
      users = newState.users;
      playerCards = newState.playerCards;
      updateState(newState.gameState);
    }
  });

  //-----START GAME ACTION-----\\
  socket.on("startGame", () => {
    var newState = startGame(gameState, maps, cardDeck);
    map = newState.map;
    cardDeck = newState.cardDeck;
    io.emit("initMap", map);
    updateState(startTurn(newState.gameState, map));
  });

  //-----MISC ACTIONS-----\\
  socket.on("settingsChanged", (settings) => {
    updateState(miscActions.settingsChanged(gameState));
  });

  socket.on("cancel", () => {
    updateState(miscActions.cancel(gameState));
  });

  socket.on("nextPhase", () => {
    var newState = miscActions.nextPhase(gameState);
    if (newState === "NEXT_TURN") {
      updateState(startTurn(gameState, map));
    } else {
      if (gameState.receiveCard) {
        cardIndex = utils.randomRange(0, cardDeck.length - 1);
        card = cardDeck[cardIndex];
        cardDeck.splice(cardIndex, 1);

        var playerIndex = playerCards.findIndex(
          (player) => player.id === gameState.player.id
        );

        if (playerIndex > -1) {
          playerCards[playerIndex].cards.push(card);
        }
        console.log(playerCards);

        socket.emit("newCard", card);
      }
      updateState(newState);
    }
  });

  //-----DRAFT ACTIONS-----\\
  socket.on("draftFrom", (territoryId) => {
    updateState(draftActions.draftFrom(territoryId, gameState));
  });

  socket.on("draftAmount", (amount) => {
    updateState(draftActions.draftAmount(amount, gameState));
  });

  socket.on("submitCards", ({ selectedCards, comboType }) => {
    newState = draftActions.draftCards(
      selectedCards,
      comboType,
      gameState,
      cardDeck
    );
    cardDeck = newState.cardDeck;
    playerCards = newState.playerCards;
    updateState(newState.gameState);
  });

  //-----ATTACK ACTIONS-----\\
  socket.on("attackFrom", (territoryId) => {
    updateState(attackActions.attackFrom(territoryId, gameState));
  });

  socket.on("attackTo", (territoryId) => {
    updateState(attackActions.attackTo(territoryId, gameState));
  });

  socket.on("attackType", (type) => {
    newState = attackActions.attackType(type, gameState);
    newState = miscActions.checkPlayerDead(gameState, playerCards, socket);

    playerCards = newState.playerCards;
    console.log(playerCards);

    newState = updateState(miscActions.checkWin(newState.gameState));
  });

  socket.on("attackManuever", (amount) => {
    updateState(attackActions.attackManuever(amount, gameState));
  });

  //-----FORTIFY ACTIONS-----\\
  socket.on("fortifyFrom", (territoryId) => {
    updateState(fortifyActions.fortifyFrom(territoryId, gameState, map));
  });

  socket.on("fortifyTo", (territoryId) => {
    updateState(fortifyActions.fortifyTo(territoryId, gameState));
  });

  socket.on("fortifyAmount", (amount) => {
    newState = fortifyActions.fortifyAmount(amount, gameState);

    updateState(startTurn(newState, map));
  });

  //-----UPDATE STATE-----\\
  function updateState(newState) {
    gameState = newState;
    io.emit("updateState", gameState);
  }
};
