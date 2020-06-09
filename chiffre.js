


function chiffre(num,x_,y_,img_){
  this.chiffre=num;
  this.x=x_;
  this.y=y_;
  this.cote=height/15;
  this.img =img_
  
  
  
  this.display = function(){
    stroke(255);
    fill(200,100,100);
    //square(this.x,this.y, this.cote);
    image(this.img, this.x, this.y, this.width, this.height);

    stroke(0);
    textSize(height/20);
    text(""+this.chiffre, this.x+this.cote/2, this.y+6*this.cote/11);
  }
  
  this.clicked = function(){
    var distx = mouseX -this.x
    var disty = mouseY -this.y
    if(distx <= this.cote && distx >= 0 &&  disty <= this.cote && disty >=0) {
      return (this.chiffre)
    }
    return 0
  }
}