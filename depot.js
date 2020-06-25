function depot(){
  this.display = function(){
    stroke(0);
    fill(255,255,0);
    rect(width/2,height/3,width/15,2*height/3-height/15)
  }
  
  this.clicked = function(){
    var distx = mouseX - width/2
    var disty = mouseY -height/3
    if(distx <= width/15 && distx >=0 && disty <= 2*height/3-height/15 && disty >=0) {
      return true
    }
  }
  
}