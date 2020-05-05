//Socket.IO Events Receiving

socket.on("userSelected", (gameInfo) => {
  gameState = gameInfo.gameState;
  maps = gameInfo.maps;
  user = gameInfo.user;
  pickSettingsSetup();
  console.log(gameState);
});

socket.on("updateState", (newState) => {
  gameState = newState;
  console.log(gameState);
});

socket.on("initMap", (newMap) => {
  map = newMap;
  map.territories.forEach((territory) => {
    territories.push(new Territory(territory));
  });
});

socket.on("newCard", (card) => {
  cards.push(card);
});
