//declaring all my stuff/graphics
let bg;
let catTree;
let catTreeRO;
let dop;
let dopRO;
let pcDesk;
let pcDeskRO;
let artWall;
let potTable;
let potTableRO;
let rug;
let rugRO;
let tsuki;
let tsukiRO;
let tvStand;
let tvStandRO;
let piggie;

//preloading to allow everything to load timely
function preload() {
  bg = loadImage("graphics/background_fill.png");
  catTree = loadImage("graphics/cat_tree_all.png");
  catTreeRO = loadImage("graphics/catTree_RO.png");
  dop = loadImage("graphics/dop_all.png");
  dopRO = loadImage("graphics/dop_RO.png");
  pcDesk = loadImage("graphics/pc_desk_all.png");
  pcDeskRO = loadImage("graphics/pcDesk_RO.png");
  artWall = loadImage("graphics/photos_and_art_all.png");
  potTable = loadImage("graphics/pottery_table_all.png");
  potTableRO = loadImage("graphics/potTable_RO.png");
  rug = loadImage("graphics/rug.png");
  rugRO = loadImage("graphics/rug_RO.png");
  tsuki = loadImage("graphics/tsuki_all.png");
  tsukiRO = loadImage("graphics/tsuki_RO.png");
  tvStand = loadImage("graphics/tv_stand_all.png");
  tvStandRO = loadImage("graphics/tvStand_RO.png");
  piggie = loadImage("graphics/piggie.png");
}

//set up canvas size
function setup() {
  createCanvas(1280, 1024);
}

//draw loops
function draw() {
  background(200, 230, 255);
  image(piggie, mouseX, mouseY, 100, 100);
  image(bg, 0, 0);
  //image(catTree, 100, 225);
  //image(rug, 750, 670);
  //image(dop, 775, 725);
  //image(pcDesk, 1000, 220);
  image(artWall, 750, 80);
  //image(potTable, 20, 500);
  //image(tsuki, 110, 225);
  //image(tvStand, 450, 115);

  //set up mouse pressed conditions: pcDesk, catTree/tsuki, dop/rug, potTable, tvStand
  if (
    mouseIsPressed === true &&
    mouseX > 1000 &&
    mouseX < 1210 &&
    mouseY > 220 &&
    mouseY < 480
  ) {
    image(pcDeskRO, 1000, 220);
  } else {
    image(pcDesk, 1000, 220);
  }

  if (
    mouseIsPressed === true &&
    mouseX > 100 &&
    mouseX < 200 &&
    mouseY > 225 &&
    mouseY < 420
  ) {
    image(catTreeRO, 100, 225);
    image(tsukiRO, 110, 225);
  } else {
    image(catTree, 100, 225);
    image(tsuki, 110, 225);
  }

  if (
    mouseIsPressed === true &&
    mouseX > 760 &&
    mouseX < 970 &&
    mouseY > 670 &&
    mouseY < 840
  ) {
    image(rugRO, 750, 670);
    image(dopRO, 775, 725);
  } else {
    image(rug, 750, 670);
    image(dop, 775, 725);
  }

  if (
    mouseIsPressed === true &&
    mouseX > 20 &&
    mouseX < 210 &&
    mouseY > 500 &&
    mouseY < 710
  ) {
    image(potTableRO, 20, 500);
  } else {
    image(potTable, 20, 500);
  }

  if (
    mouseIsPressed === true &&
    mouseX > 450 &&
    mouseX < 640 &&
    mouseY > 115 &&
    mouseY < 330
  ) {
    image(tvStandRO, 450, 115);
  } else {
    image(tvStand, 450, 115);
  }
}

//set up links to buttons
function mouseReleased() {
  if (mouseX > 450 && mouseY > 115 && mouseX < 640 && mouseY < 330) {
    window.open("http://www.kotaku.com");
  }

  if (mouseX > 20 && mouseY > 500 && mouseX < 210 && mouseY < 710) {
    window.open("https://www.instagram.com/mistah_chips/");
  }

  if (mouseX > 1000 && mouseY > 220 && mouseX < 1210 && mouseY < 480) {
    window.open("https://p5js.org/");
  }

  if (mouseX > 95 && mouseY > 225 && mouseX < 200 && mouseY < 420) {
    window.open(
      "https://docs.google.com/presentation/d/e/2PACX-1vQpnesGIMaX8oL04A-vZ3B1KCO-XoKXDpm-NQYAdYtbHGW70J1x5UfVLFhatC2l7-boL0sbLK05FCTO/pub?start=true&loop=true&delayms=5000"
    );
  }

  if (mouseX > 775 && mouseY > 725 && mouseX < 940 && mouseY < 810) {
    window.open(
      "https://docs.google.com/presentation/d/e/2PACX-1vQnwEk6RmKs2P39-AtzLSNL7oD6W_DqbKHVtSs4ODJkc3tY21IxyNcEWt9h6M01kMK6SLR5oZ_rey4-/pub?start=true&loop=true&delayms=5000"
    );
  }
}
