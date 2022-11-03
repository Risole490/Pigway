function setup() {
  createCanvas(1000, 500);
  soundTrilha.loop();
}

function draw() {
  background(roadImg);
  showActor();
  moveActor();
  showCarsR();
  showCarsL();
  moveCars();
  returnInitialPosCarsR();
  returnInitialPosCarsL();
  actorHit();
  showMyPoints();
  scorePoints();
}
