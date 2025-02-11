function setup() {
  createCanvas(1500, 2000);
  noLoop();
  colorMode(HSB);
}

function draw() {
  
  let stroke_style = ([SQUARE]);
  let stroke_w1 = random(3000);
  let stroke_w2 = random(500);
  let max_stroke_w = max(stroke_w1, stroke_w2);
  
  
  background("grey");

  var randomHue = random(45);
  var randomSat = random(30);
  var randomBr  = random(45);
  
  // stroke("silver");
  strokeCap(SQUARE);
  // strokeWeight(stroke_w1);

  // stroke(randomHue, randomSat, randomBr);
  // strokeCap(stroke_style);
  strokeWeight(stroke_w2);
  
  

  let times = int(random(3, 4));
  // let times = 2;
  let x1 = max_stroke_w;
  let x2 = width - max_stroke_w;
  let y1 = max_stroke_w;
  let y2 = height - max_stroke_w;

  while (times--) {
    stroke("black");
    // strokeCap(stroke_style);
    ;
    
    beginShape();
    curveVertex(random(x1, x2), random(y1, y2));
   
     curveVertex(random(x1, x2), random(y1, y2));
    curveVertex(random(x1, x2), random(y1, y2));
    curveVertex(random(x1, x2), random(y1, y2));

    // stroke(randomHue, randomSat, randomBr);
    // strokeCap(stroke_style);
    // fill(randomHue, randomSat, randomBr);

    curveVertex(random(x1, x2), random(y1, y2));
    
    curveVertex(random(x1, x2), random(y1, y2));
    curveVertex(random(x1, x2), random(y1, y2));
    fill(36,9,95)

    endShape();

    // stroke(randomHue, randomSat, randomBr);
    // strokeCap(stroke_style);
    // fill(0, 0, 0);
  }
}