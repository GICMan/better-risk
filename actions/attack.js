const rolling = require("../rolling");

module.exports.attackFrom = function (territoryId, gameState) {
  gameState.selection.from = territoryId;

  if (gameState.mapState[territoryId].troops < 4) {
    gameState.maxDice = gameState.mapState[territoryId].troops - 2;
  } else {
    gameState.maxDice = 3;
  }

  gameState.selectionType = "TO";

  return gameState;
};

module.exports.attackTo = function (territoryId, gameState) {
  gameState.selection.to = territoryId;
  gameState.selectionType = "ATTACK_TYPE";

  return gameState;
};

module.exports.attackType = function (type, gameState) {
  gameState.maxDice = type;
  //If rolling one die
  if (type === 0) {
    return rolling.rollOne(gameState);
  } else if (type === 1) {
    return rolling.rollTwo(gameState);
  } else if (type === 2) {
    return rolling.rollThree(gameState);
  } else {
    return rolling.autoRoll(gameState);
  }
};

module.exports.attackManuever = function (amount, gameState) {
  gameState.mapState[gameState.selection.from].troops -= amount;
  gameState.mapState[gameState.selection.to].troops += amount;

  gameState.selection = {
    to: null,
    from: null,
  };

  gameState.selectionType = "FROM";

  return gameState;
};
