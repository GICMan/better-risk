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

  for (var i = 0; i < 39; i++) {
    pickTerritory(gameState.activePlayers[0], openTerritories);
  }

  while (openTerritories.length > 0) {
    gameState.activePlayers.forEach((player) => {
      if (openTerritories.length <= 0) return;
      pickTerritory(player, openTerritories);
    });
  }

  console.log(Math.floor((-10 * gameState.activePlayers.length) / 3 + 40));

  // for (
  //   var i = 0;
  //   i < Math.floor((-10 * gameState.activePlayers.length) / 3 + 40);
  //   i++
  // ) {
  //   gameState.activePlayers.forEach((player) => {
  //     var ownedTerritories = gameState.mapState.filter(
  //       (terr) => terr.owner == player
  //     );
  //     var territoryId =
  //       ownedTerritories[utils.randomRange(0, ownedTerritories.length - 1)].id;
  //     gameState.mapState[territoryId].troops++;
  //   });
  // }

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
