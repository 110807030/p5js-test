function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(100,255,200);
  ellipse(mouseX,mouseY,5,5);
  print(mouseX,mouseY);
  text("005",mouseX+100,mouseY);
  
}
