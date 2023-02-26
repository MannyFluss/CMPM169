<<<<<<< HEAD
// // sketch.js - purpose and description here
// // Author: Your Name
// // Date:

// // Here is how you might set up an OOP p5.js project
// // Note that p5.js looks for a file called sketch.js

// // Constants - User-servicable parts
// // In a longer project I like to put these in a separate file
// const VALUE1 = 1;
// const VALUE2 = 2;

// // Globals
// let myInstance;
// let canvasContainer;

// class MyClass {
//     constructor(param1, param2) {
//         this.property1 = param1;
//         this.property2 = param2;
//     }

//     myMethod() {
//         // code to run when method is called
//     }
// }

// // setup() function is called once when the program starts
// function setup() {
//     // place our canvas, making it fit our container
//     canvasContainer = $("#canvas-container");
//     let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
//     canvas.parent("canvas-container");
//     // resize canvas is the page is resized
//     $(window).resize(function() {
//         console.log("Resizing...");
//         resizeCanvas(canvasContainer.width(), canvasContainer.height());
//     });
//     // create an instance of the class
//     myInstance = new MyClass(VALUE1, VALUE2);

//     var centerHorz = windowWidth / 2;
//     var centerVert = windowHeight / 2;
// }

// // draw() function is called repeatedly, it's the main animation loop
// function draw() {
//     background(220);    
//     // call a method on the instance
//     myInstance.myMethod();

//     // Put drawings here
//     var centerHorz = canvasContainer.width() / 2 - 125;
//     var centerVert = canvasContainer.height() / 2 - 125;
//     fill(234, 31, 81);
//     noStroke();
//     rect(centerHorz, centerVert, 250, 250);
//     fill(255);
//     textStyle(BOLD);
//     textSize(140);
//     text("p5*", centerHorz + 10, centerVert + 200);
// }

// // mousePressed() function is called once after every time a mouse button is pressed
// function mousePressed() {
//     // code to run when mouse is pressed
// }
=======
const part1 = [
    'I like to',
    'My favorite thing to do is',
    'If I could, I would',
    'I always wanted to',
    'When I grow up, I want to be able to',
    'I wish I could',
    'I believe in',
    'I can\'t help but',
    'The one thing I\'m good at is',
    'I feel alive when I',
  ];
  
  const part2 = [
    'dance in my underwear',
    'pretend to be a dinosaur',
    'paint my face with peanut butter',
    'sing in the shower',
    'jump on a trampoline',
    'talk to my plants',
    'watch the clouds',
    'run around in circles',
    'play with my food',
    'have a staring contest with a statue',
  ];
  //thank you chat gpt for those lists
  
  let alphabet = {"a": "d[ba]",
                  "b" : "[adb]"};
  
  let axiom = "a";
  let stringBuffer = "";
  let generationCount = 0;
  let generationLimit = 6;
  let currentAngle = 100;
  let currentPosition = {}
  
  let textOffsetX = 0;
  let textOffsetY = 0;
  
  let fonts = ["Arial", "Helvetica", "Georgia", "Times New Roman", "Courier New"];
  let styles = ["normal", "bold", "italic", "bolditalic"];
  
  let stack = []
  let fontStack = [];
  let length = 50
  let currPosition;
  function setup()
  {
    strokeWeight(3)
    //background(220)
    angleMode(DEGREES)
    createCanvas(windowWidth,windowHeight);
    for(generationCount = 0;generationCount<generationLimit;generationCount++)
    {
      currentPosition = {x : width/2, y : height};
      currentAngle = 90;
      //stack = []
      executeSingleGeneration();
      //interpretGeneration();
    }
    interpretAxiom()  
  }
  
  function interpretAxiom()
  {
    let arr = axiom.split('');
    arr.forEach(function(char){
      switch (char)
      {
        case 'a':
          let textToInput = random(part1) + " "
          
          text(textToInput,0 + textOffsetX,0+textOffsetY,width,height)
          textOffsetX += textWidth(textToInput);
          if (textOffsetX > width)
          {
            textOffsetX = 0;
            textOffsetY += 26
          }
          break;
        case 'b':
          let ToInput = random(part2) + " "
          
          text(ToInput,0 + textOffsetX,0+textOffsetY,width,height)
          textOffsetX += textWidth(ToInput);
          if (textOffsetX > width)
          {
            textOffsetX = 0;
            textOffsetY += 26
          }
          break;
        case '[':
          let randomFont = random(fonts);
          let randomStyle = random(styles);
          textFont(randomFont);
          switch(randomStyle)
            {
            case"normal": textStyle(NORMAL); break;
            case"bold": textStyle(BOLD); break;
            case"italic": textStyle(ITALIC); break;
            case"bolditalic": textStyle(BOLDITALIC); break;
            }
          
        case ']':
          //let curr = fontStack.pop();
          textSize(random(12,38))
          fill(random(255), random(255), random(255));
          
          
      }
    })
  }
  
  
  
  
  function executeSingleGeneration()
  {
    stringBuffer = "";
    let arr = axiom.split('');
    arr.forEach(function(char){
      switch (char)
      {
        case ('a'):
          stringBuffer += alphabet["a"];
          break;
        case 'b':
          stringBuffer += alphabet["b"];
          break;
      }
    })
    axiom += stringBuffer
    //print(generationCount + "generation produces: " + axiom);
  }
  
  function interpretGeneration()
  {
    let arr = axiom.split('');
      arr.forEach(function(char){
      switch (char)
      {
        case('d'):
          
          line(currentPosition.x,currentPosition.y,currentPosition.x,currentPosition.y-length)
          currentPosition.y -= length;
        case ('a'):
          currentPosition.x += length * cos(currentAngle);
          currentPosition.y -= length * sin(currentAngle);
          break;
        case 'b':
          currentPosition.x -= length * cos(currentAngle);
          currentPosition.y -= length * sin(currentAngle);
          //line(currentPosition.x,currentPosition.y,currentPosition.x - length ,currentPosition.y  );
          
          break;
        case '[':
          let copy = Object.assign({}, currentPosition);
          stack.push(copy)
          currentAngle *= random(-0.7,0.7);
          length *= 0.99;
          //rotate(currentAngle);
          break;
        case ']':
          currentPosition = stack.pop()
          break;
      }
    })
  }
  
  
  
  function createEquilateralTriangle(point, scalar) {
    // Calculate the height of the equilateral triangle
    const height = (Math.sqrt(3) / 2) * scalar;
  
    // Calculate the coordinates of the three vertices of the equilateral triangle
    const vertex1 = { x: point.x, y: point.y - height / 2 };
    const vertex2 = { x: point.x - scalar / 2, y: point.y + height / 2 };
    const vertex3 = { x: point.x + scalar / 2, y: point.y + height / 2 };
  
    // Return the coordinates of the three vertices as an array
    triangle(vertex1.x,vertex1.y,vertex2.x,vertex2.y,vertex3.x,vertex3.y);
  }
>>>>>>> 6b42146bb24a2b691762a85b295c3474a1090c2e
