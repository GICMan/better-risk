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
