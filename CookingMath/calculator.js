function calculator(ope,x_,y_){
  this.operat = ope
  this.x=x_
  this.y=y_
  this.cote=height/15;
  this.a =0
  this.b =0
  
  this.display = function(){
    stroke(0);
    fill(100,100,200);
    square(this.x,this.y, this.cote);
    square(this.x,this.y-this.cote, this.cote);
    square(this.x,this.y+this.cote, this.cote);
    
    stroke(0);
    fill(0,0,0);
    textSize(height/20);
    text(""+this.operat,this.x+this.cote/2, this.y+6*this.cote/11);
    text(""+this.a, this.x+this.cote/2, this.y+6*this.cote/11-this.cote);
    text(""+this.b, this.x+this.cote/2, this.y+6*this.cote/11+this.cote);
  }
  
  this.calcul=function(){
    if(this.a !=0 && this.b !=0){
      var ret
      switch(this.operat){
        case "+" :
          ret = this.a+this.b
          this.a=0
          this.b=0
          
          break
        case "-" :
          ret= this.a-this.b
          this.a=0
          this.b=0
          
          break
        case "x" :
          ret = this.a*this.b
          this.a=0
          this.b=0
          break
      } 
      return ret
    }  
    
  }
  
  this.alihoria = function(){
    if(this.a>=10){
      return this.x+1*this.cote/12
    }
    return this.x+3*this.cote/10
  }
    
  this.alihorib = function(){
    if(this.b>=10){
      return this.x+1*this.cote/12
    }
    return this.x+3*this.cote/10
  }
    
  this.updigit = function(x){
    var distx = mouseX -this.x
    var disty = mouseY -this.y
    if(distx <= this.cote && distx >= 0 && disty <= 2*this.cote && disty >=this.cote) {
      this.b = x;
      return true 
    }
    if(distx <= this.cote && distx >= 0 && disty <= 0 && disty >=-this.cote) {
      this.a = x;
      return true
    }
  }
  
}