function setup() {
    createCanvas(900, 900);
    background("black");
  }
  
  
  function draw() {
   
    fill("black")
    stroke("white")
    console.log (mouseIsPressed);
    
    if (mouseIsPressed) {
      rect (mouseX,mouseY,20,35)
    }
    
    
  }
  