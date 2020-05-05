function Button(x, y, width, height, img, clicked) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.img = img;
  this.hovered = false;

  this.clicked = clicked;

  this.pMouseIsPressed = true;

  this.update = function () {
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
