module.exports = function (
  userName,
  gameState,
  users,
  clients,
  map,
  maps,
  socket
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

      socket.emit("userSelected", {
        gameState,
        maps,
        user,
      });

      return { gameState, users, clients };
    } else {
      console.log("user is already playing");
    }
  } else {
    if (user.status == "PLAYING") {
      socket.emit("initMap", map);
    }
  }
};
