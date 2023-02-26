let x, y,weight;

let c1,c2,c3;
function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  stroke(255);
  rectMode(CENTER);


  c1 = random(155,255)
  c2 = random(155,255)
  c3 = random(155,255)
  
  
  noStroke()
  for (let i = 0; i <= width; i += 100)
  {
    
    for (let j = 0; j <= height; j += 120)
      {
        building(i,j,random(90,155))   
        
      } 
  }
}

function building(x,y,buildingHeight)
{
  for (let i = 0.0;i<buildingHeight;i+=1)
  {
    push()
    translate(x,y-i)
    rotate(radians(45))
    translate(-x,-y-i)
    fill(c1-i,c2-i,c3-i)
    let n = noise(x,y,i)
    let w = map (n,0,1,0,50)
    square(x,y+i,w - i/5)  
    pop()
  }
  background(255,255,255,.05)
}

