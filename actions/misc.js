module.exports.settingsChanged = function (gameState) {
  gameState.settings = settings;
  return gameState;
};

module.exports.cancel = function (gameState) {
  gameState.selection = { from: null, to: null };
  gameState.selectionType = "FROM";
  return gameState;
};

module.exports.nextPhase = function (gameState) {
  if (gameState.phase == "ATTACK") {
    gameState.phase = "FORTIFY";
    gameState.selectionType = "FROM";
    return gameState;
  } else if (gameState.phase == "FORTIFY") {
    return "NEXT_TURN";
    startTurn();
  }
};

module.exports.checkWin = function (gameState) {
  if (
    gameState.mapState.every((territory) => {
      territory.owner === gameState.mapState[0].owner;
    })
  ) {
    gameState.phase = "WINNER";
    gameState.winner = gameState.mapState[0].owner;
  }
  return gameState;
};

module.exports.checkPlayerDead = function (gameState, playerCards, socket) {
  var deadPlayers = [];
  gameState.activePlayers.forEach((player, index) => {
    var ownedTerritories = gameState.mapState.filter(
      (terr) => terr.owner == player
    );

    if (ownedTerritories.length == 0) {
      deadPlayers.push(player);

      let deadPlayerIndex = playerCards.findIndex(
        (playerCard) => playerCard.id === player.id
      );

      let activePlayerIndex = playerCards.findIndex(
        (playerCard) => playerCard.id === gameState.player.id
      );

      playerCards[deadPlayerIndex].cards.forEach((card) => {
        socket.emit("addCard", card);
        console.log("card add: " + card);
        playerCards[activePlayerIndex].cards.push(card);
      });

      gameState.activePlayers.splice(index, 1);
    }
  });
  return { gameState, deadPlayers, playerCards };
};
