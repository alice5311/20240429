var captureGraphics
var capture_width =640
var capture_height =640

function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(capture_width,480);//設定顯示畫面大小
  captureGraphics = createGraphics(capture_width,480)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  capture.hide()

}

function draw() {
  background(220);
  noStroke()
  var span = 10
  push()
  translate(width/2-capture_width,height/2-capture_height)
  captureGraphics.image(capture,0,0)
  for(var x =0;x<captureGraphics.width;x=x+span){
    for(var y=0;y<captureGraphics.height;y=y+span){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      rect(x,y,20,span)
    }
  }
  pop()
  
}
