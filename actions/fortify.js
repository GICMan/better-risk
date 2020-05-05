module.exports.fortifyFrom = function (territoryId, gameState, map) {
  gameState.selection.from = territoryId;
  gameState.selectionType = "TO";
  gameState.connectedTerritories = [];

  checkBorders(territoryId);

  return gameState;

  function checkBorders(territoryId) {
    map.territories[territoryId].borders.forEach((borderId) => {
      if (
        gameState.mapState[borderId].owner ===
          gameState.mapState[territoryId].owner &&
        gameState.connectedTerritories.indexOf(borderId) == -1
      ) {
        gameState.connectedTerritories.push(borderId);
        checkBorders(borderId);
      }
    });
  }
};

module.exports.fortifyTo = function (territoryId, gameState) {
  gameState.selection.to = territoryId;
  gameState.selectionType = "AMOUNT";

  return gameState;
};

module.exports.fortifyAmount = function (amount, gameState) {
  gameState.mapState[gameState.selection.from].troops -= amount;
  gameState.mapState[gameState.selection.to].troops += amount;

  return gameState;
};
