module.exports.rollOne = function (gameState) {
  var offenderRolls = [];
  var defenderRolls = [];

  var offender = gameState.mapState[gameState.selection.from];
  var defender = gameState.mapState[gameState.selection.to];

  //Roll one for offender
  offenderRolls.push(randomRange(1, 7));

  if (defender.troops === 1) {
    defenderRolls.push(randomRange(1, 7)); //Roll one for defender if they lack troops
  } else {
    defenderRolls.push(randomRange(1, 7)); //Or roll two
    defenderRolls.push(randomRange(1, 7));
  }

  //Sort rolls for comparison
  defenderRolls.sort(function (a, b) {
    return b - a;
  });

  //compare each ones largest roll
  if (offenderRolls[0] > defenderRolls[0]) {
    defender.troops--; //remove one troop from defender
  } else {
    offender.troops--; //remove one troop from attacker
  }

  //Based on who wins and looses, update the state
  if (offender.troops < 2) {
    //If the ATTACKER is out of troops

    //Cancel attack selection
    gameState = resetSelection(gameState);
    return gameState;
  } else if (defender.troops < 1) {
    //If the DEFENDER is out of troops
    //take over territory
    gameState.receiveCard = true;
    defender.owner = gameState.player;
    if (offender.troops === 2) {
      defender.troops = 1;
      offender.troops = 1;
      gameState = resetSelection(gameState);
    } else {
      gameState.selectionType = "ATTACK_MANEUVER";
    }
  }

  return gameState;
};

module.exports.rollTwo = function (gameState) {
  var offenderRolls = [];
  var defenderRolls = [];

  var offender = gameState.mapState[gameState.selection.from];
  var defender = gameState.mapState[gameState.selection.to];

  //Roll one for offender
  offenderRolls.push(randomRange(1, 7));
  offenderRolls.push(randomRange(1, 7));

  if (defender.troops === 1) {
    defenderRolls.push(randomRange(1, 7)); //Roll one for defender if they lack troops
  } else {
    defenderRolls.push(randomRange(1, 7)); //Or roll two
    defenderRolls.push(randomRange(1, 7));
  }

  //Sort rolls for comparison
  offenderRolls.sort(function (a, b) {
    return b - a;
  });
  defenderRolls.sort(function (a, b) {
    return b - a;
  });

  //compare each ones largest roll
  if (offenderRolls[0] > defenderRolls[0]) {
    defender.troops--; //remove one troop from defender
  } else {
    offender.troops--; //remove one troop from attacker
  }

  if (offender.troops !== 1) {
    if (offenderRolls[1] > defenderRolls[1]) {
      defender.troops--; //remove one troop from defender
    } else {
      offender.troops--; //remove one troop from attacker
    }
  }

  //Based on who wins and looses, update the state
  if (offender.troops < 2) {
    //If the ATTACKER is out of troops

    //Cancel attack selection
    gameState = resetSelection(gameState);
    return gameState;
  } else if (defender.troops < 1) {
    //If the DEFENDER is out of troops
    //take over territory
    gameState.receiveCard = true;
    defender.owner = gameState.player;
    if (offender.troops === 3) {
      defender.troops = 2;
      offender.troops = 1;
      gameState = resetSelection(gameState);
    } else {
      gameState.selectionType = "ATTACK_MANEUVER";
    }
  }
  return gameState;
};

module.exports.rollThree = function (gameState) {
  var offenderRolls = [];
  var defenderRolls = [];

  var offender = gameState.mapState[gameState.selection.from];
  var defender = gameState.mapState[gameState.selection.to];

  //Roll one for offender
  offenderRolls.push(randomRange(1, 7));
  offenderRolls.push(randomRange(1, 7));
  offenderRolls.push(randomRange(1, 7));

  if (defender.troops === 1) {
    defenderRolls.push(randomRange(1, 7)); //Roll one for defender if they lack troops
  } else {
    defenderRolls.push(randomRange(1, 7)); //Or roll two
    defenderRolls.push(randomRange(1, 7));
  }

  //Sort rolls for comparison
  offenderRolls.sort(function (a, b) {
    return b - a;
  });
  defenderRolls.sort(function (a, b) {
    return b - a;
  });

  //compare each ones largest roll
  if (offenderRolls[0] > defenderRolls[0]) {
    defender.troops--; //remove one troop from defender
  } else {
    offender.troops--; //remove one troop from attacker
  }

  if (offender.troops !== 1) {
    if (offenderRolls[1] > defenderRolls[1]) {
      defender.troops--; //remove one troop from defender
    } else {
      offender.troops--; //remove one troop from attacker
    }
  }

  //Based on who wins and looses, update the state
  if (offender.troops < 2) {
    //If the ATTACKER is out of troops

    //Cancel attack selection
    gameState = resetSelection(gameState);
    return gameState;
  } else if (defender.troops < 1) {
    //If the DEFENDER is out of troops
    //take over territory
    gameState.receiveCard = true;
    defender.owner = gameState.player;
    if (offender.troops === 4) {
      defender.troops = 3;
      offender.troops = 1;
      gameState = resetSelection(gameState);
    } else {
      gameState.selectionType = "ATTACK_MANEUVER";
    }
  }
  return gameState;
};

module.exports.autoRoll = function (gameState) {
  var offender = gameState.mapState[gameState.selection.from];
  var defender = gameState.mapState[gameState.selection.to];

  while (offender.troops > 1 && defender.troops > 0) {
    var offenderRolls = [];
    var defenderRolls = [];

    switch (offender.troops) {
      case 2:
        gameState.maxDice = 0;
        offenderRolls.push(randomRange(1, 7));
        break;
      case 3:
        gameState.maxDice = 1;
        offenderRolls.push(randomRange(1, 7));
        offenderRolls.push(randomRange(1, 7));
        break;
      default:
        gameState.maxDice = 2;
        offenderRolls.push(randomRange(1, 7));
        offenderRolls.push(randomRange(1, 7));
        offenderRolls.push(randomRange(1, 7));
        break;
    }

    if (defender.troops === 1) {
      defenderRolls.push(randomRange(1, 7)); //Roll one for defender if they lack troops
    } else {
      defenderRolls.push(randomRange(1, 7)); //Or roll two
      defenderRolls.push(randomRange(1, 7));
    }

    //Sort rolls for comparison
    offenderRolls.sort(function (a, b) {
      return b - a;
    });
    defenderRolls.sort(function (a, b) {
      return b - a;
    });

    //compare each ones largest roll
    if (offenderRolls[0] > defenderRolls[0]) {
      defender.troops--; //remove one troop from defender
    } else {
      offender.troops--; //remove one troop from attacker
    }

    if (offenderRolls.length > 1 && defenderRolls.length > 1) {
      if (offenderRolls[1] > defenderRolls[1]) {
        defender.troops--; //remove one troop from defender
      } else {
        offender.troops--; //remove one troop from attacker
      }
    }
  }

  if (offender.troops < 2) {
    //If the ATTACKER is out of troops

    //Cancel attack selection
    gameState = resetSelection(gameState);
    return gameState;
  } else if (defender.troops < 1) {
    //If the DEFENDER is out of troops
    //take over territory
    gameState.receiveCard = true;
    defender.owner = gameState.player;
    switch (offender.troops) {
      case 2:
        defender.troops = 1;
        offender.troops = 1;
        gameState = resetSelection(gameState);

        break;
      case 3:
        defender.troops = 2;
        offender.troops = 1;
        gameState = resetSelection(gameState);
        break;
      case 4:
        defender.troops = 3;
        offender.troops = 1;
        gameState = resetSelection(gameState);
        break;
      default:
        gameState.selectionType = "ATTACK_MANEUVER";
    }
  }
  return gameState;
};

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function resetSelection(gameState) {
  gameState.selectionType = "FROM";
  gameState.selection = {
    ...gameState.selection,
    to: null,
    from: null,
    attackType: null,
  };
  return gameState;
}
