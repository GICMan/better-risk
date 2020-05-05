function Territory(mapTerritory) {
  this.id = mapTerritory.id;
  this.name = mapTerritory.name;
  this.labelPos = mapTerritory.labelPos;
  this.borders = mapTerritory.borders;

  this.hovered = false;
  this.selected = false;

  this.owner = {};
  this.troops = 0;
  this.pMouseIsPressed = false;

  this.points = [];
  for (var i = 0; i < mapTerritory.points.length; i++) {
    this.points.push(
      createVector(mapTerritory.points[i][0], mapTerritory.points[i][1])
    );
  }

  this.runLogic = function () {
    this.owner = gameState.mapState[this.id].owner;
    this.troops = gameState.mapState[this.id].troops;
    this.hovered = false;

    if (
      gameState.selection.to === this.id ||
      gameState.selection.from === this.id
    ) {
      this.selected = true;
    } else {
      this.selected = false;
    }

    //if its the users turn, and this territory is owned by them...
    if (gameState.player.id == user.id) {
      if (gameState.phase == "DRAFT") {
        //Draft phase
        if (gameState.player.id === this.owner.id) {
          this.checkClicked(() => {
            socket.emit("draftFrom", this.id);
          });
        }
      } else if (gameState.phase == "ATTACK") {
        //Attack phase
        if (gameState.selectionType == "FROM") {
          //Select from
          if (gameState.player.id === this.owner.id && this.troops > 1) {
            this.checkClicked(() => {
              socket.emit("attackFrom", this.id);
            });
          }
        } else if (gameState.selectionType == "TO") {
          //Select to
          if (
            map.territories[gameState.selection.from].borders.includes(
              this.id
            ) &&
            gameState.player.id != this.owner.id
          ) {
            this.checkClicked(() => {
              socket.emit("attackTo", this.id);
            });
          }
        }
      } else if (gameState.phase == "FORTIFY") {
        //FORTIFY phase
        //Select from
        if (gameState.selectionType == "FROM") {
          if (gameState.player.id === this.owner.id && this.troops > 1) {
            this.checkClicked(() => {
              socket.emit("fortifyFrom", this.id);
            });
          }
        } else if (gameState.selectionType == "TO") {
          if (gameState.connectedTerritories.includes(this.id)) {
            this.checkClicked(() => {
              socket.emit("fortifyTo", this.id);
            });
          }
        }
      }
    }
  };

  this.drawShape = function () {
    colorMode(HSB, 360);
    if (this.owner == "none") return;
    if (this.hovered) {
      fill(this.owner.color, 100, 360);
    } else {
      fill(this.owner.color, 200, 360);
    }
    if (this.selected) {
      fill(this.owner.color, 360, 360);
    }

    stroke(this.owner.color, 360, 20);
    strokeWeight(3);
    beginShape();
    this.points.forEach((point) => {
      vertex(point.x, point.y);
    });
    vertex(this.points[0].x, this.points[0].y);
    endShape();
  };

  this.drawLabel = function () {
    colorMode(HSB, 360);
    if (this.owner == "none") return;
    fill(this.owner.color, 360, 32);
    noStroke();
    if (mapScale > 2) {
      noStroke();
      textSize(10);
      fill("white");
      textAlign(CENTER, CENTER);
      text(this.name, this.labelPos[0], this.labelPos[1] + 10);
    }
  };

  this.drawMarker = function () {
    colorMode(HSB, 360);
    if (this.owner == "none") return;
    fill(this.owner.color, 360, 20);
    noStroke();
    circle(
      this.labelPos[0],
      this.labelPos[1],
      constrain(30 / mapScale, 10, 40)
    );

    fill(this.owner.color, 60, 360);
    noStroke();
    textSize(constrain(30 / mapScale, 10, 40));
    text(this.troops, this.labelPos[0], this.labelPos[1]);
  };

  this.checkHovering = function () {
    if (!showCards) {
      this.hovered = collidePointPoly(
        (mouseX - width / 2) / mapScale - mapXPos,
        (mouseY - height / 2) / mapScale - mapYPos,
        this.points
      );
    }
  };

  this.checkClicked = function (onclick) {
    this.checkHovering();
    if (mouseIsPressed === false && this.pMouseIsPressed === true) {
      if (this.hovered) {
        onclick();
      }

      this.pMouseIsPressed = false;
    }
    if (mouseIsPressed === true && this.pMouseIsPressed === false) {
      this.pMouseIsPressed = true;
    }
  };
}
