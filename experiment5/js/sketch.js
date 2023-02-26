let c1,c2,c3
function setup() {
  angleMode(DEGREES)
  createCanvas(800, 800,WEBGL);
  c1 = floor(random(155, 256));
  c2 = floor(random(155, 256));
  c3 = floor(random(155, 256));
}

let angle = 0.0;

function draw()
{
  translate(0,-100,0)
  background('lightblue')
  ambientLight(100, 100, 100);
  pointLight(100, 100, 100, -100, 10, 10);
  rotateZ(0)
  rotateX(-30)
  rotateY(angle)
  
  building(50,50,50)
  translate(0,250,0)
  ambientMaterial('brown');
  specularMaterial('brown');
  cylinder(100,10,100)
  angle += 0.5;
}
function building(x,y,buildingHeight)
{
  noStroke()

  for (let i = 0.0;i<buildingHeight;i+=1)
  {
    //fill(c1,c2,c3)
    ambientMaterial(c1,c2,c3);
    specularMaterial(200,200,200);
    shininess(0.5);
    push()
    let temp = noise(x,y,i);
    let width = map(temp,0,1,5,100)
    translate(0,i*5,0);
    box(width + i/5,5,width + i/5)
    pop()
  }
}