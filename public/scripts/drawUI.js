var pMouseIsPressed = false;

function drawUI() {
  gameState.activePlayers.forEach((player, i) => {
    text(player.name, width - 100, 100 * i + 100);
  });

  buttons.showCont.update();

  buttons.showCards.update();

  if (showCards) {
    cardUI();
  }
  rectMode(CENTER);
  if (gameState.player.id === user.id) {
    if (gameState.phase == "DRAFT") {
      if (gameState.selectionType == "FROM") {
        currentPhaseUI();
      } else if (gameState.selectionType == "AMOUNT") {
        selectAmountUI(1, gameState.draftAmount);
        fill("blue");
        stroke("black");
        strokeWeight(10);
        rect(
          width / 2,
          height - 150,
          territories[gameState.selection.from].name.length * 20,
          40,
          5
        );
        noStroke();
        fill("black");
        textSize(27);
        text(
          territories[gameState.selection.from].name,
          width / 2,
          height - 150
        );
      }
    } else if (gameState.phase == "ATTACK") {
      if (gameState.selectionType == "FROM") {
        currentPhaseUI();
        buttons.nextPhase.update();
      } else if (gameState.selectionType == "TO") {
        buttons.cancel.update();
      } else if (gameState.selectionType == "ATTACK_TYPE") {
        selectTypeUI();
      } else if (gameState.selectionType == "ATTACK_MANEUVER") {
        selectAmountUI(
          gameState.maxDice,
          gameState.mapState[gameState.selection.from].troops - 1,
          true
        );
      }
    } else if (gameState.phase == "FORTIFY") {
      if (gameState.selectionType == "FROM") {
        currentPhaseUI();
        buttons.nextPhase.update();
      } else if (gameState.selectionType == "AMOUNT") {
        selectAmountUI(
          1,
          gameState.mapState[gameState.selection.from].troops - 1
        );
      }
    }
  } else {
    currentPhaseUI();
  }
}

function selectAmountUI(min, max, noCancel) {
  stroke("black");
  strokeWeight(10);
  fill("blue");
  circle(width / 2, height - 80, 60);
  textAlign(CENTER, CENTER);
  noStroke();
  fill("black");
  textSize(37);
  text(selectedAmount, width / 2, height - 80);

  buttons.decrease.update();
  buttons.increase.update();
  buttons.confirm.update();
  if (!noCancel) {
    buttons.cancel.update();
  }

  selectedAmount = constrain(selectedAmount, min, max);
}

function selectTypeUI() {
  const attackTypes = ["One Die", "Two Dice", "Three Dice", "Auto Roll"];
  stroke("black");
  strokeWeight(5);
  fill("blue");
  rectMode(CENTER);
  rect(width / 2, height - 80, 97, 60, 20);
  textAlign(CENTER, CENTER);
  noStroke();
  fill("black");
  textSize(20);
  text(attackTypes[selectedAmount], width / 2, height - 80);

  buttons.decrease.update();
  buttons.increase.update();
  buttons.confirm.update();
  buttons.cancel.update();
  selectedAmount = constrain(selectedAmount, 0, gameState.maxDice);
}

function currentPhaseUI() {
  stroke("black");
  strokeWeight(10);
  colorMode(HSB, 360);
  fill(gameState.player.color, 200, 360);
  rectMode(CENTER);
  rect(width / 2, height - 80, 350, 60, 20);

  circle(width / 2 - 190, height - 80, 80);

  fill(gameState.player.color, 100, 360);
  rect(width / 2, height - 150, 180, 40, 5);

  noStroke();
  textAlign(CENTER, CENTER);
  textSize(37);
  textStyle(NORMAL);
  fill("black");
  text(gameState.player.name, width / 2, height - 80);
  textSize(17);
  textStyle(BOLD);
  text(gameState.phase, width / 2, height - 150);
}

function cardUI() {
  colorMode(RGB);
  fill(0, 0, 0, 200);
  rectMode(CORNER);
  rect(0, 0, width, height - 100);
  fill(200, 200, 200);
  rectMode(CENTER);
  rect(width / 2, 360, 310, 40);
  rect(width / 2, 420, 310, 40);
  rect(width / 2, 480, 310, 40);

  if (
    gameState.player.id === user.id &&
    gameState.phase === "DRAFT" &&
    gameState.selectionType == "FROM"
  ) {
    buttons.submitCards.update();
  }

  cards.forEach((card, index) => {
    if (
      collidePointRect(
        mouseX,
        mouseY,
        width / 2 - 150,
        index * 50 + 100 - 15,
        300,
        30
      )
    ) {
      fill(255, 0, 0);
      if (mouseIsPressed && pMouseIsPressed == false) {
        if (selectedCards.length < 3) {
          selectedCards.push(card);
          cards.splice(index, 1);
        }
        this.pMouseIsPressed = true;
      }
    } else {
      fill(0, 0, 255);
    }
    rect(width / 2, index * 50 + 100, 300, 30);
  });

  selectedCards.forEach((card, index) => {
    if (
      collidePointRect(
        mouseX,
        mouseY,
        width / 2 - 150,
        index * 60 + 360 - 15,
        300,
        30
      )
    ) {
      fill(255, 0, 0);
      if (mouseIsPressed && pMouseIsPressed == false) {
        cards.push(card);
        selectedCards.splice(index, 1);

        this.pMouseIsPressed = true;
      }
    } else {
      fill(0, 0, 255);
    }

    rect(width / 2, index * 60 + 360, 300, 30);
  });

  fill(0);
  cards.forEach((card, index) => {
    text(cardMapping[card.type], width / 2, index * 50 + 100);
  });
  selectedCards.forEach((card, index) => {
    text(cardMapping[card.type], width / 2, index * 60 + 360);
  });

  if (mouseIsPressed == false && this.pMouseIsPressed == true) {
    this.pMouseIsPressed = false;
  }
}
