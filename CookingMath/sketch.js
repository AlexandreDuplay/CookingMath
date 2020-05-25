var chiffres = []
var calculators = []
var selecte = 0
var results = []
var res = 0
var resboo = false
var resref =0
var scor = 0
var com = (Math.floor((Math.random() * 100) + 10))

function setup() {
  createCanvas(1072,603);
  for (var i =0;i<9;i++){
    chiffres[i]= new chiffre(i+1,width/20,2*height/15+(10-i+1)*height/15)
  }
  
  /// création des calculator
  calculators[0] = new calculator("+",width/5,height/3+height/15)
  calculators[1] = new calculator("+",2*width/5,height/3+height/15)
  calculators[2] = new calculator("-",width/5,2*height/3+height/15)
  calculators[3] = new calculator("x",2*width/5,2*height/3+height/15)
  ///
  
  ///zone de dépot des commandes
  dep =new depot()
  
}

function mousePressed(){
  if(dep.clicked()){
    results.splice(resref,1)
    res --
    resref = 0
    if(resboo && selecte==com){ 
      scor += com
      com = (Math.floor((Math.random() * 100) + 10))
    }
  }
  
  
  if(selecte != 0){
      for (var i =0;i<calculators.length;i++){
        if(calculators[i].updigit(selecte)){
          if(resboo){
            results.splice(resref,1)
            res --
            resref = 0
          }
        }
        if(calculators[i].a!=0 && calculators[i].b!=0){
          results[res] = new result(calculators[i].calcul(),"",calculators[i].x+height/15+1,calculators[i].y)
          res++
        }
      }
  }
  for (var i =0;i<chiffres.length;i++){
    selecte = chiffres[i].clicked()
    resboo=false
    if(selecte != 0){
      break 
    }
  }
  for (var i =0;i<results.length;i++){
    if(selecte != 0){
      break
    }
    selecte = results[i].clicked()
    resboo=true
    resref = i
    if(selecte != 0){
      break
    }
  } 
}

function draw() {
  background(220);
  
  dep.display()
  
  ///affichage des chiffres (ingrédients)
  for (var i =0;i<chiffres.length;i++){
    chiffres[i].display()
  }
  
  ///affichages des machines à calculer 
  for (var i =0;i<calculators.length;i++){
    calculators[i].display()
  }
  
  ///affichages des resultats des machines à calculer 
  for (var i =0;i<results.length;i++){
    results[i].display()
  }
  
  ///affichage du chiffre selectioné
  textSize(height/30);
  text("selection : ",0,height/15)
  
  textSize(height/18);
  text(""+selecte,width/11,height/15)
  ///
  
  /// demande test 
  textSize(height/30);
  text("commande : "+com,0,height/15+height/20)
  
  /// demande test 
  textSize(height/30);
  text("score : "+scor,0,height/15+2*height/20)
  
  
  stroke(0)
  line(width/2+width/15,0,width/2+width/15,height)
  line(width/20,height/3,width/2,height/3)
  line(width/20,14*height/15,width/2,14*height/15)
}