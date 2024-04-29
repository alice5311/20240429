function setup() {
  createCanvas(windowWidth,windowHeight);
  apture = createCapture(VIDEO)
  capture.size(320,240);//設定顯示畫面大小
  image(capture,mouseX, mouseY)
}

function draw() {
  background(220);
  push()
  translate(width/2-160,height/2-120)
  image(capture,0,0)
  pop()
  
}
