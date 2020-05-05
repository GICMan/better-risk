var myMap = {
  mapName: "",
  territories: [
    {
      id: 0,
      name: "Perth",
      points: [
        [154, 349],
        [216, 395],
        [233, 412],
        [201, 432],
        [172, 429],
        [155, 420],
        [159, 406],
        [166, 396],
        [158, 368],
      ],
      borders: [1, 4, 5, 38],
      labelPos: [186, 406],
    },
    {
      id: 1,
      name: "Geraldton",
      points: [
        [154, 349],
        [142, 315],
        [129, 289],
        [136, 273],
        [143, 245],
        [181, 275],
        [216, 309],
        [239, 323],
        [220, 341],
        [221, 365],
        [216, 395],
      ],
      borders: [0, 2, 4, 5],
      labelPos: [184, 326],
    },
    {
      id: 2,
      name: "Fitzville",
      points: [
        [143, 245],
        [181, 225],
        [209, 222],
        [248, 210],
        [250, 256],
        [251, 307],
        [239, 323],
        [216, 309],
        [181, 275],
      ],
      borders: [3, 1, 4],
      labelPos: [213, 252],
    },
    {
      id: 3,
      name: "Derby",
      points: [
        [248, 210],
        [256, 193],
        [268, 172],
        [279, 179],
        [302, 145],
        [331, 142],
        [347, 153],
        [346, 312],
        [316, 311],
        [251, 307],
        [250, 256],
      ],
      borders: [2, 4, 6, 11, 13],
      labelPos: [298, 249],
    },
    {
      id: 4,
      name: "Warburton",
      points: [
        [221, 365],
        [344, 357],
        [346, 312],
        [316, 311],
        [251, 307],
        [239, 323],
        [220, 341],
      ],
      borders: [3, 2, 1, 5, 13, 15],
      labelPos: [286, 335],
    },
    {
      id: 5,
      name: "Winthrop",
      points: [
        [233, 412],
        [277, 416],
        [286, 401],
        [309, 390],
        [345, 381],
        [344, 357],
        [221, 365],
        [216, 395],
      ],
      borders: [1, 4, 0, 15],
      labelPos: [266, 380],
    },
    {
      id: 6,
      name: "Tanami",
      points: [
        [347, 153],
        [375, 172],
        [378, 229],
        [346, 231],
      ],
      borders: [3, 7, 9, 10],
      labelPos: [358, 199],
    },
    {
      id: 7,
      name: "Darwin",
      points: [
        [347, 153],
        [367, 128],
        [379, 116],
        [365, 111],
        [390, 103],
        [430, 117],
        [457, 117],
        [457, 144],
        [442, 152],
        [392, 181],
        [375, 172],
      ],
      borders: [6, 9, 8, 20],
      labelPos: [396, 141],
    },
    {
      id: 8,
      name: "Boroloola",
      points: [
        [442, 152],
        [470, 173],
        [469, 193],
        [392, 181],
      ],
      borders: [7, 9, 19],
      labelPos: [441, 175],
    },
    {
      id: 9,
      name: "Dally",
      points: [
        [378, 229],
        [470, 229],
        [469, 193],
        [392, 181],
        [375, 172],
      ],
      borders: [7, 6, 8, 10, 19],
      labelPos: [422, 209],
    },
    {
      id: 10,
      name: "Elliott",
      points: [
        [346, 231],
        [410, 273],
        [469, 266],
        [470, 229],
        [378, 229],
      ],
      borders: [11, 12, 19],
      labelPos: [422, 249],
    },
    {
      id: 11,
      name: "Fort Kate",
      points: [
        [347, 295],
        [411, 296],
        [410, 273],
        [346, 231],
      ],
      borders: [3, 13, 10, 12],
      labelPos: [371, 273],
    },
    {
      id: 12,
      name: "Sandover",
      points: [
        [411, 296],
        [470, 296],
        [469, 266],
        [410, 273],
      ],
      borders: [10, 11, 14, 19],
      labelPos: [439, 284],
    },
    {
      id: 13,
      name: "Maria",
      points: [
        [345, 334],
        [413, 335],
        [411, 296],
        [347, 295],
        [346, 312],
      ],
      borders: [3, 4, 15, 14, 11],
      labelPos: [378, 319],
    },
    {
      id: 14,
      name: "Oodnatta",
      points: [
        [413, 335],
        [506, 333],
        [508, 293],
        [470, 296],
        [411, 296],
      ],
      borders: [12, 13, 16, 18, 23, 19],
      labelPos: [457, 318],
    },
    {
      id: 15,
      name: "Coorable",
      points: [
        [345, 381],
        [381, 380],
        [416, 395],
        [413, 335],
        [345, 334],
        [344, 357],
      ],
      borders: [4, 5, 16, 13],
      labelPos: [377, 362],
    },
    {
      id: 16,
      name: "Coober",
      points: [
        [416, 395],
        [438, 388],
        [471, 401],
        [471, 333],
        [413, 335],
      ],
      borders: [14, 15, 17, 18],
      labelPos: [441, 365],
    },
    {
      id: 17,
      name: "Lincoln",
      points: [
        [416, 395],
        [436, 431],
        [471, 401],
        [438, 388],
      ],
      borders: [16, 18],
      labelPos: [440, 410],
    },
    {
      id: 18,
      name: "Adelaide",
      points: [
        [471, 401],
        [468, 419],
        [455, 431],
        [459, 445],
        [488, 441],
        [494, 463],
        [505, 476],
        [506, 333],
        [471, 333],
      ],
      borders: [17, 16, 14, 26, 32, 34],
      labelPos: [490, 390],
    },
    {
      id: 19,
      name: "Carpenteria",
      points: [
        [508, 293],
        [529, 256],
        [550, 192],
        [507, 185],
        [470, 173],
        [469, 193],
        [470, 229],
        [469, 266],
        [470, 296],
      ],
      borders: [8, 9, 10, 12, 20, 21, 23, 14],
      labelPos: [499, 234],
    },
    {
      id: 20,
      name: "Ciarns",
      points: [
        [507, 185],
        [519, 158],
        [528, 103],
        [536, 101],
        [553, 143],
        [563, 146],
        [584, 189],
        [550, 192],
      ],
      borders: [7, 19, 21],
      labelPos: [541, 168],
    },
    {
      id: 21,
      name: "Mackay",
      points: [
        [584, 189],
        [621, 232],
        [569, 267],
        [529, 256],
        [550, 192],
      ],
      borders: [20, 19, 23, 22],
      labelPos: [575, 226],
    },
    {
      id: 22,
      name: "Rockhampton",
      points: [
        [569, 267],
        [595, 282],
        [650, 333],
        [663, 280],
        [621, 232],
      ],
      borders: [21, 23, 24, 25],
      labelPos: [623, 270],
    },
    {
      id: 23,
      name: "Quilpie",
      points: [
        [506, 333],
        [580, 336],
        [595, 282],
        [569, 267],
        [529, 256],
        [508, 293],
      ],
      borders: [19, 21, 22, 24, 14, 26, 27],
      labelPos: [540, 304],
    },
    {
      id: 24,
      name: "Toowoomba",
      points: [
        [580, 336],
        [650, 333],
        [595, 282],
        [580, 336],
      ],
      borders: [23, 22, 28, 27],
      labelPos: [607, 315],
    },
    {
      id: 25,
      name: "Brisbane",
      points: [
        [650, 333],
        [685, 328],
        [682, 286],
        [663, 280],
      ],
      borders: [22, 28, 41],
      labelPos: [670, 309],
    },
    {
      id: 26,
      name: "Broken Hill",
      points: [
        [545, 334],
        [545, 383],
        [540, 422],
        [503, 410],
        [506, 333],
      ],
      borders: [23, 18, 32, 29, 27],
      labelPos: [524, 375],
    },
    {
      id: 27,
      name: "Carsonstown",
      points: [
        [580, 336],
        [621, 334],
        [619, 383],
        [545, 383],
        [545, 334],
      ],
      borders: [24, 23, 26, 30, 28],
      labelPos: [580, 358],
    },
    {
      id: 28,
      name: "Tamsworth",
      points: [
        [619, 383],
        [675, 381],
        [685, 328],
        [650, 333],
        [621, 334],
      ],
      borders: [25, 24, 27, 30],
      labelPos: [651, 355],
    },
    {
      id: 29,
      name: "Mildura",
      points: [
        [540, 422],
        [561, 447],
        [580, 445],
        [592, 447],
        [563, 408],
        [545, 383],
      ],
      borders: [26, 30, 35, 33, 32],
      labelPos: [558, 424],
    },
    {
      id: 30,
      name: "Dubbo",
      points: [
        [592, 447],
        [615, 427],
        [649, 421],
        [675, 381],
        [619, 383],
        [545, 383],
        [563, 408],
      ],
      borders: [27, 28, 29, 31, 41],
      labelPos: [607, 401],
    },
    {
      id: 31,
      name: "ACT",
      points: [
        [592, 447],
        [608, 448],
        [632, 467],
        [649, 421],
        [615, 427],
      ],
      borders: [30, 35, 37],
      labelPos: [624, 441],
    },
    {
      id: 32,
      name: "Nhill",
      points: [
        [540, 422],
        [548, 432],
        [531, 448],
        [505, 450],
        [503, 410],
      ],
      borders: [18, 26, 34, 29, 33],
      labelPos: [521, 430],
    },
    {
      id: 33,
      name: "Bendigo",
      points: [
        [531, 448],
        [552, 486],
        [573, 462],
        [580, 445],
        [561, 447],
        [548, 432],
      ],
      borders: [32, 29, 35, 36, 34],
      labelPos: [553, 454],
    },
    {
      id: 34,
      name: "Fort Bool",
      points: [
        [505, 476],
        [552, 486],
        [531, 448],
        [505, 450],
      ],
      borders: [33, 32, 18, 38, 36],
      labelPos: [524, 466],
    },
    {
      id: 35,
      name: "E",
      points: [
        [592, 447],
        [598, 465],
        [573, 462],
        [580, 445],
      ],
      borders: [29, 33, 36, 37],
      labelPos: [584, 453],
    },
    {
      id: 36,
      name: "Melboure",
      points: [
        [552, 486],
        [583, 495],
        [608, 478],
        [598, 465],
        [573, 462],
      ],
      borders: [35, 33, 34, 37],
      labelPos: [580, 479],
    },
    {
      id: 37,
      name: "Tamboon",
      points: [
        [592, 447],
        [608, 448],
        [632, 467],
        [608, 478],
        [598, 465],
      ],
      borders: [31, 35, 36, 39],
      labelPos: [610, 463],
    },
    {
      id: 38,
      name: "Queenstown",
      points: [
        [562, 519],
        [592, 526],
        [592, 554],
        [571, 551],
      ],
      borders: [0, 34, 39, 40],
      labelPos: [579, 536],
    },
    {
      id: 39,
      name: "Lanceston",
      points: [
        [592, 526],
        [618, 520],
        [611, 558],
        [592, 554],
      ],
      borders: [38, 40, 37],
      labelPos: [602, 537],
    },
    {
      id: 40,
      name: "Hobart",
      points: [
        [571, 551],
        [584, 572],
        [611, 558],
        [592, 554],
      ],
      borders: [38, 39, 45],
      labelPos: [586, 563],
    },
    {
      id: 41,
      name: "Auckland",
      points: [
        [946, 419],
        [960, 450],
        [970, 485],
        [993, 489],
        [1005, 474],
        [983, 448],
      ],
      borders: [25, 30, 42],
      labelPos: [976, 459],
    },
    {
      id: 42,
      name: "Wellington",
      points: [
        [970, 485],
        [958, 498],
        [979, 515],
        [978, 532],
        [1027, 475],
        [1005, 474],
      ],
      borders: [41, 43],
      labelPos: [985, 497],
    },
    {
      id: 43,
      name: "Chrischurch",
      points: [
        [944, 514],
        [964, 520],
        [966, 539],
        [931, 577],
        [919, 553],
        [934, 536],
      ],
      borders: [42, 44],
      labelPos: [942, 541],
    },
    {
      id: 44,
      name: "Wakanda",
      points: [
        [919, 553],
        [897, 570],
        [906, 591],
        [926, 600],
        [931, 577],
      ],
      borders: [43, 45],
      labelPos: [915, 575],
    },
    {
      id: 45,
      name: "Dunedin",
      points: [
        [897, 570],
        [868, 594],
        [858, 612],
        [882, 634],
        [910, 620],
        [926, 600],
        [906, 591],
      ],
      borders: [44, 40],
      labelPos: [890, 604],
    },
  ],
  name: "Australia",
};

var selectedTerritory = 0;

var mode = "ADD";

function preload() {
  backgroundImg = loadImage("./mapImage.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
  let mapNameImp = createInput("");
  mapNameImp.input(() => {
    myMap.name = mapNameImp.value();
  });

  myMap.territories = myMap.territories.map((territory) => {
    return new Territory(territory.id, territory);
  });

  let addTerritory = createButton("Add Territory");
  addTerritory.mousePressed(() => {
    myMap.territories.push(new Territory(myMap.territories.length));
  });

  let genJSONButton = createButton("Finish");
  genJSONButton.mousePressed(() => {
    var parsedTerritories = myMap.territories.map((territory) => {
      return {
        id: territory.id,
        name: territory.name,
        points: territory.points,
        borders: territory.borders,
        labelPos: territory.centerPoint,
      };
    });
    console.log(
      JSON.stringify({
        ...myMap,
        territories: parsedTerritories,
      })
    );
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 100);
}

function draw() {
  background(0);
  image(backgroundImg, 0, 0, width, height);

  text(mode, 100, 30);

  myMap.territories.forEach((territory) => {
    territory.draw();
  });

  if (mode == "ADD") {
    myMap.territories.forEach((territory) => {
      if (territory.id != selectedTerritory) {
        territory.points.forEach((point) => {
          if (dist(point[0], point[1], mouseX, mouseY) < 5) {
            text("snap", mouseX, mouseY + 10);
          }
        });
      }
    });
  }
}

function mouseClicked() {
  if (mode == "ADD") {
    if (mouseY < height) {
      var pointX = mouseX;
      var pointY = mouseY;
      myMap.territories.forEach((territory) => {
        if (territory.id != selectedTerritory) {
          territory.points.forEach((point) => {
            if (dist(point[0], point[1], mouseX, mouseY) < 10) {
              console.log("snap");
              pointX = point[0];
              pointY = point[1];
            }
          });
        }
      });
      myMap.territories[selectedTerritory].addPoint(pointX, pointY);
    }
  } else if (mode == "CENTER") {
    if (mouseY < height) {
      myMap.territories[selectedTerritory].setCenter(mouseX, mouseY);
    }
  } else if (mode == "DELETE") {
    if (mouseY < height) {
      myMap.territories[selectedTerritory].points.forEach((point, index) => {
        if (dist(point[0], point[1], mouseX, mouseY) < 10) {
          myMap.territories[selectedTerritory].points.splice(index, 1);
        }
      });
    }
  }
}

function keyTyped() {
  if (key == "a") {
    mode = "ADD";
  } else if (key == "c") {
    mode = "CENTER";
  } else if (key == "b") {
    mode = "BORDER";
  } else if (key == "d") {
    mode = "DELETE";
  } else if (keyCode == ESCAPE) {
    mode = "";
  }
}

function keyPressed() {
  if (keyCode == ESCAPE) {
    mode = "";
  }
}

function Territory(id, previous) {
  if (previous) {
    this.name = previous.name;
    this.points = previous.points;
    this.borders = previous.borders;
    this.id = previous.id;
    this.centerPoint = previous.labelPos;
  } else {
    this.name = "";
    this.points = [];
    this.borders = [];
    this.id = id;
    this.centerPoint = [];
  }

  this.selectedText = createP("Selected");
  this.selectedText.position(400, this.id * 50 + height + 35);

  this.nameInput = createInput();
  this.nameInput.input(() => {
    this.name = this.nameInput.value();
  });
  this.nameInput.position(60, this.id * 50 + height + 50);
  this.nameInput.value(this.name);

  this.selectButton = createButton("Select");
  this.selectButton.mousePressed(() => {
    selectedTerritory = this.id;
  });
  this.selectButton.position(0, this.id * 50 + height + 50);

  this.addBorder = createButton("Add/Remove Border");
  this.addBorder.mousePressed(() => {
    var exists = myMap.territories[selectedTerritory].borders.findIndex((e) => {
      return e == this.id;
    });
    if (exists > -1) {
      myMap.territories[selectedTerritory].borders.splice(exists, 1);
    } else {
      myMap.territories[selectedTerritory].borders.push(this.id);
    }
  });
  this.addBorder.position(210, this.id * 50 + height + 50);

  this.addPoint = function (x, y) {
    this.points.push([x, y]);
  };

  this.setCenter = function (x, y) {
    this.centerPoint[0] = x;
    this.centerPoint[1] = y;
  };

  this.draw = function () {
    if (this.points.length > 0) {
      noFill();
      stroke("blue");
      strokeWeight(5);
      beginShape();
      this.points.forEach((point) => {
        vertex(point[0], point[1]);
      });
      if (selectedTerritory == this.id && mode == "ADD") {
        vertex(mouseX, mouseY);
      }
      vertex(this.points[0][0], this.points[0][1]);
      endShape();

      noStroke();
      fill("red");
      this.points.forEach((point) => {
        circle(point[0], point[1], 10);
      });
    }

    if (this.centerPoint.length > 0) {
      textAlign(CENTER, CENTER);
      circle(this.centerPoint[0], this.centerPoint[1], 5);
      textSize(20);
      fill("black");
      stroke("white");
      text(this.name, this.centerPoint[0], this.centerPoint[1]);
    }

    var newBorderText = "";
    this.borders.forEach((id) => {
      newBorderText = newBorderText + myMap.territories[id].name + ", ";
    });

    if (selectedTerritory == this.id) {
      this.selectedText.show();
      text(newBorderText, 200, 30);
    } else {
      this.selectedText.hide();
    }
  };
}
