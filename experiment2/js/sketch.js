class bird {
    constructor(_posX, _posY) {
      this.angle = 0;
      //center
      this.positionX = _posX;
      this.positionY = _posY;
      this.r1 =random(100,255)
      this.g1 =random(100,255)
      this.b1 =random(100,255)
      
      this.r2 =random(100,255)
      this.g2 =random(100,255)
      this.b2 =random(100,255)
      
      this.outlineColor = color(this.r1,this.g1,this.b1)
      this.fillColor = color(this.r2,this.g2,this.b2)
      
      
      this.currentDirection = random(0, TWO_PI);
      this.trails = [];
      this.currentDirVector = {x:cos(this.currentDirection),y:sin(this.currentDirection)}
    }
  
    //nearby bird list
    drawBird() {
      //creates the trail effect of this bird
      let to_push = { x: this.positionX, y: this.positionY };
      this.trails.push(to_push);
      // for (let i = 0; i < this.trails.length; i++) {
      //   noStroke();
      //   fill("magenta");
      //   circle(this.trails[i].x, this.trails[i].y, 5);
      // }
      fill("magenta")
      stroke(this.outlineColor)
      strokeWeight(4)
      
      line(this.positionX,this.positionY,this.trails[0].x,this.trails[0].y)
      if (this.trails.length > 30) {
        this.trails.shift();
      }
      //draw the actual circle
      stroke(this.outlineColor)
      fill(this.fillColor)
      circle(this.positionX,this.positionY,20)
      //update position
      this.positionX += this.currentDirVector.x;
      this.positionY += this.currentDirVector.y;
      //bounce off walls
      let collision = false;
      for(let i=0; i<wallsList.length;i++)
      {
        let curr = wallsList[i]
        if(dist(this.positionX,this.positionY,curr.x,curr.y) < 20)
          {
            collision = true;
            break;
          }
      }
      
      
      if  (this.positionX <= 0 || this.positionX >= width || collision)
      {
        this.currentDirVector.x *= -1
      }
      if  (this.positionY <= 0 || this.positionY >= height || collision)
      {
        this.currentDirVector.y *= -1
      }
    }
    //alignment rule, check small area around bird, average the directions
  
    //cohesion, get the grouping around me
  }
  
  function setup() {
    const canvas = createCanvas(displayWidth, displayHeight);
    canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
    this.birdList = [new bird(200, 200)];
    this.wallsList = []
  }
  
  function draw() {
    background(color("#ADD8E6"));
    for (let i = 0; i < birdList.length; i++) {
      birdList[i].drawBird();
    }
    for (let i = 0; i < wallsList.length; i++) {
      curr = wallsList[i]
      fill('red')
      noStroke();
      circle(curr.x,curr.y,20)
    }
    
    
  }
  
  function mousePressed()
  {
    if(mouseButton == LEFT)
      {
        for(let i=0;i<wallsList.length;i++)
        {
          let curr = wallsList[i];
          if (dist(curr.x,curr.y,mouseX,mouseY)<20)
          {
            return
          }
        }
        this.birdList.push(new bird(mouseX,mouseY));
        
      }
      if(mouseButton == RIGHT)
      {
        for(let i=0;i<birdList.length;i++)
        {
          let curr = birdList[i];
          if (dist(curr.positionX,curr.positionY,mouseX,mouseY)<20)
          {
            return
          }
        }
        this.wallsList.push({x:mouseX,y:mouseY});
      }
  }
        
  function mouseWheel(event)
  {
    for(let i=0;i<birdList.length;i++)
    {
      let curr = birdList[i]
      let test = birdList[i].outlineColor;
      //console.log(test)
      curr.r1 = max((curr.r1 + 1)%255,100)
      curr.g1 = max((curr.g1 + 1)%255,100)
      curr.b1 = max((curr.b1 + 1)%255,100)
      
      curr.r2 = max((curr.r2 + 1)%255,100)
      curr.g2 = max((curr.g2 + 1)%255,100)
      curr.b2 = max((curr.b2 + 1)%255,100)
      
      curr.outlineColor = color(curr.r1,curr.g1,curr.b1)
      curr.fillColor = color(curr.r2,curr.g2,curr.b2)
  
    }
  }
  
  
  