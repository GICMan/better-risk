function Button(updatePosition, width, height, img, clicked) {
  this.updatePosition = updatePosition;
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.img = img;
  this.hovered = false;

  this.clicked = clicked;

  this.pMouseIsPressed = true;

  this.update = function () {
    var pos = this.updatePosition();
    this.x = pos.x;
    this.y = pos.y;

    if (
      mouseX > this.x - this.width / 2 &&
      mouseX < this.x + this.width / 2 &&
      mouseY > this.y - this.height / 2 &&
      mouseY < this.y + this.height / 2
    ) {
      tint(200);

      if (mouseIsPressed && this.pMouseIsPressed == false) {
        this.clicked();
        tint(200);
        this.pMouseIsPressed = true;
      }
    } else {
      noTint();
    }
    if (this.img) {
      imageMode(CENTER);

      image(this.img, this.x, this.y, this.width, this.height);
      noTint();
    } else {
      rectMode(CENTER);
      fill(0, 0, 255);
      rect(this.x, this.y, this.width, this.height);
    }

    if (mouseIsPressed == false && this.pMouseIsPressed == true) {
      this.pMouseIsPressed = false;
    }
  };
}
