const fs = require("fs");
const path = require("path");

const utils = require("../utils.js");

module.exports = function (gameState, maps, cardDeck) {
  const mapRaw = fs.readFileSync(
    path.join(__dirname, "../public/maps", maps[0])
  );
  let map = JSON.parse(mapRaw);

  var type = 0;
  map.territories.forEach((territory) => {
    cardDeck.push({
      territory: territory.id,
      type,
    });
    type++;
    if (type > 2) {
      type = 0;
    }
  });

  cardDeck = utils.shuffle(cardDeck);

  gameState.mapState = map.territories.map((territory) => {
    return { id: territory.id, owner: "none", troops: 0 };
  });

  let openTerritories = gameState.mapState.slice();

  while (openTerritories.length > 0) {
    gameState.activePlayers.forEach((player) => {
      if (openTerritories.length <= 0) return;
      pickTerritory(player, openTerritories);
    });
  }

  gameState.activePlayers = utils.shuffle(gameState.activePlayers);

  return { gameState, map, cardDeck };

  function pickTerritory(player, openTerritories) {
    var territoryIndex = utils.randomRange(0, openTerritories.length - 1);

    var territoryId = openTerritories[territoryIndex].id;
    openTerritories.splice(territoryIndex, 1);

    gameState.mapState[territoryId].owner = player;
    gameState.mapState[territoryId].troops = 1;
  }
};
