function drawMap() {
  mapXPos = lerp(mapXPos, toMapXPos, 0.1);

  mapYPos = lerp(mapYPos, toMapYPos, 0.1);

  mapScale = lerp(mapScale, toMapScale, 0.1);

  //Draw Shapes
  push();
  translate(width / 2, height / 2); //Position map correctly
  scale(mapScale); //Scale map correctly
  translate(mapXPos, mapYPos); //Position map correctly

  imageMode(CORNER);
  image(mapBackground, 70, 80);

  if (showCont) {
    map.continents.forEach((cont) => {
      colorMode(HSB, 360);
      fill(cont.color, 360, 360);
      stroke("black");
      beginShape();
      cont.points.forEach((point) => {
        vertex(point[0], point[1]);
      });
      endShape();
    });
  } else {
    territories.forEach((territory) => {
      territory.runLogic();
      territory.drawShape();
    });

    territories.forEach((territory) => {
      territory.drawMarker();
    });
    territories.forEach((territory) => {
      territory.drawLabel();
    });
  }

  pop();
}
