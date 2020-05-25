function result(num,calc,x_,y_){
  this.chiffre=num;
  this.calcul = calc
  this.x=x_;
  this.y=y_;
  this.cote=height/15;
  
  this.display = function(){
    stroke(255);
    fill(100,200,100);
    square(this.x,this.y, this.cote);

    stroke(0);
    fill(0,0,0);
    textSize(height/20);
    text(""+this.chiffre, this.alihori(), this.y+7*this.cote/10);
  }
  
  this.alihori = function(){
    if(this.chiffre>=10){
      return this.x+1*this.cote/12
    }
    return this.x+3*this.cote/10
  }
  
  this.clicked = function(){
    var distx = mouseX -this.x
    var disty = mouseY -this.y
    if(distx <= this.cote && distx >= 0 &&  disty <= this.cote && disty >=0) {
      console.log(this.chiffre)
      return (this.chiffre)
    }
    return 0
  }
}