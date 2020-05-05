function addButtons() {
  buttons.showCont = new Button(
    width / 2 - 400,
    height - 80,
    60,
    60,
    leftArrow,
    function () {
      showCont = !showCont;
    }
  );

  buttons.showCards = new Button(
    width / 2 + 400,
    height - 80,
    60,
    60,
    rightArrow,
    function () {
      showCards = !showCards;
    }
  );

  buttons.submitCards = new Button(
    width / 4,
    height / 2,
    60,
    60,
    check,
    function () {
      var infantry = 0;
      var cavalry = 0;
      var artillery = 0;

      selectedCards.forEach((card) => {
        switch (card.type) {
          case 0:
            infantry++;
            break;
          case 1:
            cavalry++;
            break;
          case 2:
            artillery++;
            break;
        }
      });

      if (infantry == 3) {
        socket.emit("submitCards", { selectedCards, comboType: 4 });
        selectedCards = [];
      } else if (cavalry == 3) {
        socket.emit("submitCards", { selectedCards, comboType: 6 });
        selectedCards = [];
      } else if (artillery == 3) {
        socket.emit("submitCards", { selectedCards, comboType: 8 });
        selectedCards = [];
      } else if (infantry == 1 && cavalry == 1 && artillery == 1) {
        socket.emit("submitCards", { selectedCards, comboType: 10 });
        selectedCards = [];
      }
    }
  );

  buttons.decrease = new Button(
    width / 2 - 100,
    height - 80,
    60,
    60,
    leftArrow,
    function () {
      selectedAmount--;
    }
  );

  buttons.increase = new Button(
    width / 2 + 100,
    height - 80,
    60,
    60,
    rightArrow,
    function () {
      selectedAmount++;
    }
  );

  buttons.confirm = new Button(
    width / 2 + 200,
    height - 80,
    60,
    60,
    check,
    function () {
      if (gameState.phase === "DRAFT") {
        socket.emit("draftAmount", selectedAmount);
      } else if (gameState.phase === "ATTACK") {
        if (gameState.selectionType === "ATTACK_TYPE") {
          socket.emit("attackType", selectedAmount);
        } else {
          socket.emit("attackManuever", selectedAmount);
        }
      } else if (gameState.phase == "FORTIFY") {
        socket.emit("fortifyAmount", selectedAmount);
      }
    }
  );

  buttons.cancel = new Button(
    width / 2 - 200,
    height - 80,
    60,
    60,
    cancel,
    function () {
      socket.emit("cancel");
    }
  );

  buttons.nextPhase = new Button(
    width / 2 + 250,
    height - 80,
    60,
    60,
    rightArrow,
    function () {
      socket.emit("nextPhase");
    }
  );
}
