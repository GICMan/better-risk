module.exports = function (gameState, map) {
  player = gameState.activePlayers[gameState.turnIndex];
  gameState.phase = "DRAFT";
  gameState.selectionType = "FROM";
  gameState.selection = { from: null, to: null };
  gameState.receiveCard = false;
  gameState.player = player;

  let territories = gameState.mapState.filter((territory) => {
    return territory.owner.id == player.id;
  });

  player.conBonus = 0;

  map.continents.forEach((cont) => {
    var foundTerr = 0;
    cont.territories.forEach((terr) => {
      territories.forEach((ownedTerr) => {
        if (ownedTerr.id == terr) {
          foundTerr++;
        }
      });
    });
    if (foundTerr == cont.territories.length) {
      player.conBonus += cont.bonus;
    }
  });

  if (Math.floor(territories.length / 3) + player.conBonus < 3) {
    gameState.draftAmount = 3;
  } else {
    gameState.draftAmount =
      Math.floor(territories.length / 3) + player.conBonus;
  }

  gameState.turnIndex++;
  if (gameState.turnIndex > gameState.activePlayers.length - 1) {
    gameState.turnIndex = 0;
  }

  return gameState;
};
