let img;
let sortType;
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  loadImage("https://source.unsplash.com/random/"+ String(width)+"x"+String(height), function(image) {
    img = image;
  });
  sortType = random([0,1,2,3]);
  text("loading... \nsort type : " + sortType , width/2,height/2 );
}

function draw() {
  if (img && sortType == 0) {
    image(img, 0, 0);
    img.loadPixels();
    for (let i = 0; i< img.pixels.length; i ++)
      {
        if (img.pixels[i] < img.pixels[i+1])
        {
          let temp = img.pixels[i+1];
          img.pixels[i + 1] = img.pixels[i];
          img.pixels[i] = temp;
        }
      }
    img.updatePixels()
  }
  
  if (img && sortType == 1)
  {
    image(img,0,0);
    img.loadPixels();
    
    for (let i = img.pixels.length-1;i>0;i--)
    {
      if (img.pixels[i] > img.pixels[i-1])
      {
          let temp = img.pixels[i-1];
          img.pixels[i - 1] = img.pixels[i];
          img.pixels[i] = temp;
      }
    }
    img.updatePixels();
    
    ///
    
    ///
    
  }
  if (img && sortType == 2)
  {
    image(img,0,0);
    img.loadPixels();
    let num1 = 2;
    let num2 = 1;
    ////
    for (let i = img.pixels.length-1;i>0;i--)
    {
      if (img.pixels[i] > img.pixels[i-num1])
      {
          let temp = img.pixels[i-num2];
          img.pixels[i - num2] = img.pixels[i];
          img.pixels[i] = temp;
      }
    }
    img.updatePixels();
    ////
  }
  if (img && sortType == 3)
  {
    image(img,0,0);
    img.loadPixels();
    let num1 = 1;
    let num2 = 2;
    ////
    for (let i = img.pixels.length-1;i>0;i--)
    {
      if (img.pixels[i] > img.pixels[i-num1])
      {
          let temp = img.pixels[i-num2];
          img.pixels[i - num2] = img.pixels[i];
          img.pixels[i] = temp;
      }
    }
    img.updatePixels();
    ////
  }
  
  
  
  
}