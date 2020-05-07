module.exports = function (
  userName,
  gameState,
  users,
  clients,
  map,
  maps,
  socket,
  playerCards
) {
  //check if it is in the users list
  let userIndex = users.findIndex((user) => {
    return user.name == userName;
  });

  //if no users are found return
  if (userIndex == -1) {
    console.log("no user with that name found");
    return;
  }

  let user = users[userIndex];

  if (gameState.phase === "SETTINGS") {
    if (user.status === "OFFLINE") {
      user.status = "PLAYING";

      gameState.activePlayers.push(user);

      clients.push({ clientId: socket.id, userId: user.id });
      playerCards.push({ id: user.id, cards: [] });

      socket.emit("userSelected", {
        gameState,
        maps,
        user,
      });

      return { gameState, users, clients, playerCards };
    } else {
      console.log("user is already playing");
    }
  } else {
    if (user.status == "PLAYING") {
      socket.emit("userSelected", {
        gameState,
        maps,
        user,
      });
      socket.emit("initMap", map);
      cardElement = playerCards.find(
        (cardElement) => cardElement.id == user.id
      );
      if (cardElement) {
        cardElement.cards.forEach((card) => {
          socket.emit("newCard", card);
        });
      }
    }
  }
};
