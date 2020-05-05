module.exports.draftFrom = function (territoryId, gameState, updateState) {
  gameState.selection.from = territoryId;
  gameState.selectionType = "AMOUNT";

  return gameState;
};

module.exports.draftAmount = function (amount, gameState, updateState) {
  gameState.mapState[gameState.selection.from].troops += amount;
  gameState.draftAmount -= amount;
  if (gameState.draftAmount <= 0) {
    gameState.phase = "ATTACK";
  }
  gameState.selection = {
    to: null,
    from: null,
  };
  gameState.selectionType = "FROM";
  return gameState;
};

module.exports.draftCards = function (
  selectedCards,
  comboType,
  gameState,
  cardDeck
) {
  gameState.draftAmount += comboType;
  selectedCards.forEach((card) => {
    cardDeck.push(card);
  });

  return { gameState, cardDeck };
};
