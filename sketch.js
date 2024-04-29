var captureGraphics
var capture_width =640
var capture_height =640

function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(capture_width,capture_height);//設定顯示畫面大小
  captureGraphics = createGraphics(capture_width,480)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  capture.hide()
  //旋鈕
  var radioElement = createRadio();
  radioElement.position(width/2-300,20)
  radioElement.option("方塊")
  radioElement.option("圓圈")
  radioElement.option("亮度")
  radioElement.option("紅底")

  radioElement.style("font-size","30px")
  radioElement.style("color","#fff")

}

function draw() {
  background(0);
  noStroke()
  span = 5+map(mouseX,0,width,0,20)
  var span = 10
  push()
  translate(width/2-capture_width,height/2-capture_height)
  captureGraphics.image(capture,0,0)
  for(var x =0;x<captureGraphics.width;x=x+span){
    for(var y=0;y<captureGraphics.height;y=y+span){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      if(radioElement.value()=="方塊"){
        rect(x,y,span)}

      if(radioElement.value()=="圓圈"){
        ellipse(x,y,span)}

      if(radioElement.value()=="亮度")
      {
        bk = (pixel[0]+pixel[1]+pixel[2])/3
        fill(bk)
        //ellipse(x,y,span) //span代表圓圈的直徑
        ellipse(x,y,span*map(bk,0,255,0,1.2)) //透過map指令，bk在0-255間，依照比率設定0-1間
      }  
      if(radioElement.value()=="紅底"){
        colorMode(HSB)
        fill(pixel[0],80,80)
        rectMode(CENTER)
        rect(x,y,span)
        ellipse(x,y,3) //透過map指令，bk在0-255間，依照比率設定0-1間
      }
      if(radioElement.value()=="文字"){
        const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
        let txt = "一二三四五田雷電龕龘"
        let bkId = int(map(bk, 0, 255, 9, 0))
        text(txt[bkId])
      }

    }

  }
  pop()
}
