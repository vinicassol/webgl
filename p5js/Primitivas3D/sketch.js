function setup() {
  createCanvas(710, 400, WEBGL); //habilitar o uso de webgl
}

function draw() {
  background(220);


  //noStroke();
  //fill('purple');
  normalMaterial();

  translate(-240, -100, 0);
  push();
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    plane(70);
  pop();

  translate(240,0,0);
  push();
    rotateY(45);
    box(90, 70, 60);
  pop();

  translate(240,0,0);
  push();
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cylinder(70,70);
  pop();

  translate(-240*2,200,0);
  push();
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(70, 70);
  pop();

  translate(240,0,0);
  push();
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    sphere(70);
  pop();

  translate(240,0,0);
  push();
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    torus(70,30);
  pop();

}
