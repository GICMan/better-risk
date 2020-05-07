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
  cardDeck,
  playerCards
) {
  gameState.draftAmount += comboType;
  var playerIndex = playerCards.findIndex(
    (player) => player.id === gameState.player.id
  );
  selectedCards.forEach((card) => {
    cardDeck.push(card);
    var cardIndex = playerCards[playerIndex].cards.findIndex(card);
    playerCards[playerIndex].cards.splice(cardIndex, 1);
  });

  return { gameState, cardDeck, playerCards };
};
