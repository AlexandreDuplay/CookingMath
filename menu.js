function menu(){

this.setup=function()
{
    createCanvas(windowWidth,windowHeight);
    myButton = new Clickable();     
    myButton.locate(20, 20);        
    myButton.onPress = function(){ 
      mgr.showScene( perdu ); 
    }
    
}

this.draw=function(){

  background(220);
  myButton.draw()
  
}
}