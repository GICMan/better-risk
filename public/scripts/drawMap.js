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
      strokeJoin(ROUND);
      strokeCap(ROUND);
      beginShape();
      cont.points.forEach((point) => {
        vertex(point[0], point[1]);
      });
      endShape();
    });
    map.continents.forEach((cont) => {
      colorMode(HSB, 360);
      fill("black");
      textSize(20);
      strokeWeight(3);
      stroke("white");
      textAlign(CENTER, CENTER);
      text(cont.name, cont.labelPos[0], cont.labelPos[1]);
      text(cont.bonus, cont.labelPos[0], cont.labelPos[1] + 18);
    });
  } else {
    map.routes.forEach((route) => {
      noFill();
      stroke(0, 0, 0, 200);
      strokeWeight(5);
      beginShape();
      curveVertex(route[0][0], route[0][1]);
      route.forEach((point) => {
        curveVertex(point[0], point[1]);
      });
      curveVertex(route[route.length - 1][0], route[route.length - 1][1]);
      endShape();
    });

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
