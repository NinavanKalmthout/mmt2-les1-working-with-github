var rood = 255;
var vincent = "hallo";
var blauw = 255;
var groen = 255;

function setup() {
  // put setup code here

  createCanvas(400,400); 
  background("lightYellow");

  
  

}

function draw() {
  // put drawing code here
background(0,400-mouseX,0);
  

  rood = random(0,255); 
  blauw = random(0,255);
  groen = random(0,255);

// background(rood,groen,blauw);

console.log(mouseX)

noStroke();
fill("lightBlue");
ellipse(200,200,mouseX,mouseY);

noStroke();
fill("lightPink");
rect(150,150,100,100);

noStroke();
fill("magenta");
ellipse(200,200,50,50);

stroke("lightGreen");
strokeWeight(5);
line(0,200,400,200);
}