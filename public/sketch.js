function setup() {
    createCanvas(windowWidth, windowHeight );
    let r = random(255);
    let g = random(255);
    let b = random(255);
    bgColor = color(r, g, b)
  }
  function draw() {
    background(bgColor);
  }