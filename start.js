var mgr = new SceneManager();
mgr.wire();
myStorage = window.localStorage;
var user
var cog
var cogmenu
var pause = false
var scorg =""
var table
var chair
var bar


function drawtext(x, y, text_array) {

  var pos_x = x;
  for (var i = 0; i < text_array.length; ++i) {
    var part = text_array[i];
    var t = part[0];
    var c = part[1];
    var w = textWidth(t);
    fill(c);
    if (i == 1 || i == 3) {
      textSize(width / 70)
    } else {
      textSize(width / 100)
    }
    text(t, pos_x, y);
    pos_x += w;
  }
}

function preload() {
  cog = loadImage('img/cog.png');
  crate = loadImage('img/crate.png');
  floork = loadImage('img/floor1.jpeg');
  bar1 = loadImage('img/bar1.png');
  bar2 = loadImage('img/bar2.png');
  chaira = loadImage('img/chairw.png');
  chairw = loadImage('img/chaira.png');
  tablew = loadImage('img/tablew.png');
  tablea = loadImage('img/tablea.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cog.resize(height / 15, height / 15)
  crate.resize(height/15,height/15)
  bar1.resize(width/2-height/15,height/5)
  bar2.resize(width/2-height/15,height/5)
  chairw.resize(height/5,height/5)
  chaira.resize(height/7,height/7)
  tablew.resize(height/7,height/7)
  tablea.resize(height/7,height/7)
  cogmenu = new Clickable(width - 30 - height / 15, 10, cog);
  floork.resize(9*width/20,9*height/15)
  cogmenu.onPress = function() {
    if (!pause) {
      pause = true
    } else {
      pause = false
    }
  }
  mgr.showScene(menu);


}

function shop(){
  var lvlLock
  var highScore
  
  this.setup = function(){
    
    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }
    console.log(saveP)
    
    
    
    bar1.resize(height/4,height/5)
    bar2.resize(height/4,height/5)
    chairw.resize(height/5,height/6)
    chaira.resize(height/7,height/7)
    tablew.resize(height/7,height/7)
    tablea.resize(height/7,height/7)
    
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      bar1.resize(width/2-height/15,height/5)
      bar2.resize(width/2-height/15,height/5)
      chairw.resize(height/5,height/5)
      chaira.resize(height/7,height/7)
      tablew.resize(height/7,height/7)
      tablea.resize(height/7,height/7)
      mgr.scenes[mgr.findSceneIndex(shop)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(shop)].enterExecuted = false
      mgr.showScene(menuselection);
      
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      pause =false
      bar1.resize(width/2-height/15,height/5)
      bar2.resize(width/2-height/15,height/5)
      chairw.resize(height/5,height/5)
      chaira.resize(height/7,height/7)
      tablew.resize(height/7,height/7)
      tablea.resize(height/7,height/7)
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      mgr.scenes[mgr.findSceneIndex(shop)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(shop)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    createCanvas(windowWidth, windowHeight);
    myBut1 = new Clickable(width/3+width/20,height/6);
    myBut1.text = "acheter, 100 pièces"
    myBut1.onPress = function() {
      if(scorg>=100){
        chair =1
        scorg-=100
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+scorg+","+chair+","+table+","+bar);
      }
    }
    myBut2 = new Clickable(width/3+width/20,2*height/6);
    myBut2.text = "acheter, 500 pièces"
    myBut2.onPress = function() {
      if(scorg>=500){
        chair =2
        scorg-=500
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+scorg+","+chair+","+table+","+bar);
      }
    }
    myBut3 = new Clickable(width/3+width/20,3*height/6);
    myBut3.text = "acheter, 200 pièces"
    myBut3.onPress = function() {
      if(scorg>=200){
        table =1
        scorg-=200
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+scorg+","+chair+","+table+","+bar);
      }
    }
    myBut4 = new Clickable(width/3+width/20,4*height/6);
    myBut4.text = "acheter, 1000 pièces"
    myBut4.onPress = function() {
      if(scorg>=1000){
        table =2
        scorg-=1000
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+scorg+","+chair+","+table+","+bar);
      }
    }    
    myBut5 = new Clickable(2*width/3+width/20,height/6);
    myBut5.text = "acheter, 2000 pièces"
    myBut5.onPress = function() {
      if(scorg>=2000){
        bar =1
        scorg-=2000
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+scorg+","+chair+","+table+","+bar);
      }
    }
    myBut6 = new Clickable(2*width/3+width/20,3*height/6);
    myBut6.text = "acheter, 3000 pièces"
    myBut6.onPress = function() {
      if(scorg>=3000){
        bar =2
        scorg-=3000
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+scorg+","+chair+","+table+","+bar);
      }
    }
  }
  
  this.draw = function(){
    background(220)
    cogmenu.draw()
    text("Pièces: "+scorg,width/30,29*height/30)
    image(chairw, width/3-width/20, 1*height/6);
    image(chaira, width/3-width/20, 2*height/6);
    image(tablew, width/3-width/20, 3*height/6);
    image(tablea, width/3-width/20, 4*height/6);
    image(bar1, 2*width/3-width/20, 1*height/6);
    image(bar2, 2*width/3-width/20, 3*height/6);
    if(chair!=1){
       myBut1.draw()
    }
    if(chair!=2){
       myBut2.draw()
    }
    if(table!=1){
       myBut3.draw()
    }
    if(table!=2){
       myBut4.draw()
    }
    if(bar!=1){
       myBut5.draw()
    }
    if(bar!=2){
       myBut6.draw()
    }
    
    if(pause){
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}

function test() {

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    myBut = new Clickable();
    myBut.locate(width / 2, 3 * height / 4);
    myBut.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      mgr.showScene(menu);
    }
  }

  this.draw = function() {
    background(220)
    textSize(height / 10);
    text("Game Over", width / 2, height / 2)
    myBut.draw()


  }


}

function yeah() {

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    myBut = new Clickable();
    myBut.locate(width / 3 - myBut.width / 2, 2 * height / 3);
    myBut.onPress = function() {
      mgr.showScene(menuselection);
    }
    myBut2 = new Clickable();
    myBut2.locate(2 * width / 3 - myBut2.width / 2, 2 * height / 3);
    myBut2.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      mgr.showScene(menu);
    }
  }

  this.draw = function() {
    background(220)
    textSize(height / 10);
    text("Niveau Réussi", width / 2, height / 4)
    myBut.draw()
    textSize(height / 20)
    text("menu de sélection", width / 3, height / 2)
    text("menu principal", 2 * width / 3, height / 2)
    myBut2.draw()
  }
}

function yeahMedaille() {
  var lvlLock = ""
  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    myBut = new Clickable();
    myBut.locate(width / 3 - myBut.width / 2, 2 * height / 3);
    myBut.onPress = function() {
      mgr.showScene(menuselection);
    }
    myBut2 = new Clickable();
    myBut2.locate(2 * width / 3 - myBut2.width / 2, 2 * height / 3);
    myBut2.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      mgr.showScene(menu);
    }
    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }


  }

  this.draw = function() {
    background(220)
    textSize(height / 10);
    text("Niveau Réussi", width / 2, height / 4)
    myBut.draw()
    textSize(height / 20)
    text("menu de sélection", width / 3, height / 2)
    text("menu principal", 2 * width / 3, height / 2)
    myBut2.draw()
    textSize(height / 30)
    fill(0)
    text("Vous avez débloqué une nouvelle médaille des 'chefs des maths'", width / 2, 3 * height / 4 + height / 10)
    if (lvlLock >= 4 && lvlLock < 9) {
      fill(255, 153, 51)
      square(width / 2 - height / 30, 3 * height / 4-width/15, width / 15)
    }
    else if (lvlLock >= 9 && lvlLock < 19 ) {
      fill((102, 153, 153))
      square(width / 2 - height / 30, 3 * height / 4-width/15, width / 15)
    }
    else if (lvlLock >= 19) {
      fill(255, 215, 0)
      square(width / 2 - height / 30, 3 * height / 4-width/15, width / 15)
    }
  }
}

function menuselection() {

  var bouts = []


  this.setup = function() {
    createCanvas(windowWidth, windowHeight);

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }
    var x = width / 6
    var y = height / 6
    for (var i = 0; i < 20; i++) {
      if (i % 5 == 0) {
        x = width / 6
      } else {
        x += width / 6
      }

      if (i % 5 == 0 && i > 0) {
        y += height / 6
      }
      bouts[i] = new Clickable();
      bouts[i].locate(x - bouts[i].width / 2, y);
      bouts[i].text = "niveau " + (i + 1)
      if (lvlLock >= i) {
        bouts[i].color = 255
        switch (i) {
          case 0:
            bouts[i].onPress = function() {
              mgr.showScene(niveau1);
            }
            break;
          case 1:
            bouts[i].onPress = function() {
              mgr.showScene(niveau2);
            }
            break;
          case 2:
            bouts[i].onPress = function() {
              mgr.showScene(niveau3);
            }
            break;
          case 3:
            bouts[i].onPress = function() {
              mgr.showScene(niveau4);
            }
            break;
          case 4:
            bouts[i].onPress = function() {
              mgr.showScene(niveau5);
            }
            break;
          case 5:
            bouts[i].onPress = function() {
              mgr.showScene(niveau6);
            }
            break;
          case 6:
            bouts[i].onPress = function() {
              mgr.showScene(niveau7);
            }
            break;
          case 7:
            bouts[i].onPress = function() {
              mgr.showScene(niveau8);
            }
            break;
          case 8:
            bouts[i].onPress = function() {
              mgr.showScene(niveau9);
            }
            break;
          case 9:
            bouts[i].onPress = function() {
              mgr.showScene(niveau10);
            }
            break;
        }

      } else {
        bouts[i].color = 100
      }
    }

    ///mode infini
    myButtonin = new Clickable();
    myButtonin.text = "mode infini"
    myButtonin.locate(width / 2 - myButtonin.width / 2, 5 * height / 6);
    myButtonin.onPress = function() {

      mgr.showScene(sketch);
    }
    ///
    ///shop
    myButtonsho = new Clickable();
    myButtonsho.text = "mode infini"
    myButtonsho.locate(3*width / 4 - myButtonsho.width / 2, 5 * height / 6);
    myButtonsho.onPress = function() {

      mgr.showScene(shop);
    }
    ///

  }

  this.draw = function() {
    background(220);
    myButtonin.draw()
    myButtonsho.draw()
    text("Pièces: "+scorg,width/30,29*height/30)

    for (var i = 0; i < bouts.length; i++) {
      bouts[i].draw()
    }
  }

}




function menu() {

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    nom = createInput()
    user =""
    nom.position(width / 2 - nom.width / 2, 4 * height / 10)
    myButton1 = new Clickable();
    myButton1.text = "valider"
    myButton1.locate(width / 2 - myButton1.width / 2, height / 2);
    myButton1.onPress = function() {
      user = nom.value()
      if (user == "") {
        alert("rentrez un nom")
        return
      }
      nom.position(-1000, -1000)
      
      mgr.showScene(menuselection);
    }

  }

  this.draw = function() {

    background(220);
    myButton1.draw()
    stroke(0)
    textSize(width / 10)
    text("Cooking Math", width / 2, height / 5)
    textSize(width / 25)
    text("Nom:", width / 2, 7 * height / 20)
    //line(width/2,0,width/2,height)

  }
}

function sketch() {

  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var highScore = ""
  var lvlLock = ""
  
  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }
    

    
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      pause = false
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }


    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }

    /// création des calculator
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[1] = new calculator("+", 2 * width / 5, height / 3 + height / 15)
    calculators[2] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[3] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)
    ///

    ///zone de dépot des commandes
    dep = new depot()
    console.log(chair)
    

  }

  function demande() {
    var commsize =commandes.length
    switch (floor(scor / 100)) {
      case 0:
        commandes[commsize] = new commande(40, 10)
        break;
      case 1:
        commandes[commsize] = new commande(60, 30)
        break;
      case 2:
        commandes[commsize] = new commande(90, 60)
        break;
      default:
        commandes[commsize] = new commande(100, 70)
        break;
    }

  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
          if (cmpt < 500) {
            cmpt = 0
          }
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(),"" , calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {
    if (scor > highScore) {
      highScore = scor
    }
    
    if (cmpt % 700 == 0) {
      demande()
      cmpt=0
    }
    background(220);
    cogmenu.draw()
    image(floork, width/20, height/3);
    imageMode(CENTER)
    dep.display()
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)
    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : ", width / 18, height / 15)

    textSize(height / 18);
    text("" + selecte, width / 8, height / 15)
    ///


    /// score test 
    textSize(height / 30);
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)

    textSize(height / 30);
    text("Hscore : " + highScore, width / 16, height / 15 + 3 * height / 20)


    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 4-height/15, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 4-height/15, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 4-height/15, width / 15)
    }

    for(var i = 0 ; i<perdu;i++){
      fill(255,0,0)
      square(width / 7 + (i * 2 )* height/15  +height/30, height / 4, height / 15)
    }
    
    if (perdu >= 3) {
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      commandes=[]
      var gscor = parseInt(scorg)
      var bb = gscor+scor
      cmpt = 0
      myStorage.setItem('' + user, "");
      myStorage.setItem('' + user, "" + highScore + "," + Math.max(floor(highScore / 100), lvlLock)+","+bb+","+chair+","+table+","+bar);
      perdu = 0
      scor = 0
      mgr.showScene(test);
    }
    
    if (!pause) { 
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        if (commandes[i].update()) {
          commandes.splice(i, 1)
          perdu++
        }
      }
      cmpt++
    } else {
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}

function niveau1() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    chiffres[0] = new chiffre(6, width / 20, height / 2,crate)
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      mgr.scenes[mgr.findSceneIndex(niveau1)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau1)].enterExecuted = false
      commandes = []
      scor = 0
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau1)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau1)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)

    demande()
    commandes[0].x = width / 2
    commandes[0].y = height / 10
    commandes[0].chiffre = 12

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()
    

  }

  function demande() {
    commandes[commandes.length] = new commande()
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), ""+calculators[i].a+calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {
    background(220);
    image(floork, width/20, height/3);
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }
    cogmenu.draw()
    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    textSize(height / 30);
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)



    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    stroke(0);
    fill(255);
    rect(width / 7 + width / 15, 3 * height / 15, width / 2, height / 8)
    textSize(width / 100)
    fill(0, 0)
    ellipse(width / 2 + height / 30, height / 10 + height / 30, height / 11, height / 11)

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    textAlign(LEFT)
    var col1 = [0, 0, 0];
    var col2 = [250, 220, 140];
    var col3 = [200, 100, 100];
    var col4 = [100, 100, 200];
    var col5 = [100, 200, 100];
    var col6 = [255, 255, 0];
    if (selecte == 0 && (calculators[0].a == 0 && calculators[0].b == 0) && results.length == 0) {

      var comtxt = [
        ["Bienvenu dans Cooking Math. Comme vous pouvez le voir vous avez déjà une", col1],
        [" COMMANDE ", col2],
      ];
      drawtext(width / 7 + width / 14, 3 * height / 15 + height / 45, comtxt);

      var explitxt = [
        ["Pour satisfaire vos clients vous devez effectuer un calcul, laissez moi vous montrer.", col1],
      ];
      drawtext(width / 7 + width / 14, 3 * height / 15 + 2 * height / 45, explitxt);

      var numtxt = [
        ["Tout d'abord cliquez sur la case du", col1],
        [" CHIFFRE        ", col3],
        ["6 ", col1],
      ];
      drawtext(width / 7 + width / 14, 3 * height / 15 + 3 * height / 45, numtxt);

    } else {
      var comtxt = [
        ["Parfait, maintenant pour utiliser la ", col1],
        [" machine de calcul               ", col4],
        ["placez votre 6 sur une des 2 cases '0'. ", col1],
      ];
      drawtext(width / 7 + width / 14, 3 * height / 15 + height / 45, comtxt);




      if (calculators[0].a != 0 || calculators[0].b != 0) {
        var calctxt = [
          ["Super, maintenant prends le deuxième 6 et mets le sur le 2ème '0'.", col1],
        ];
        drawtext(width / 7 + width / 14, 3 * height / 15 + 2 * height / 45, calctxt);
      }
      if (results.length == 1) {
        var restxt = [
          ["Plus qu'une chose à faire, prennez le ", col1],
          [" RESULTAT", col5],
        ];
        drawtext(width / 7 + width / 14, 3 * height / 15 + 5 * height / 90, restxt);
        var res2txt = [
          ["Et placez le dans la ", col1],
          [" zone de dépos.", col6],
        ];
        drawtext(width / 7 + width / 14, 3 * height / 15 + 7 * height / 90, res2txt);
      }
    }

    if (commandes.length == 0) {
      if (lvlLock == 0) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 1+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau1)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau1)].enterExecuted = false
      mgr.showScene(yeah)
    }



    textAlign(CENTER);
    
    if(pause){
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }

  }
}


function niveau2() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 5; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau2)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau2)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau2)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau2)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)

    demande()
    commandes[0].x = width / 2 - 3 * height / 15
    commandes[0].y = height / 10
    commandes[0].chiffre = 9
    demande()
    commandes[1].x = width / 2 - height / 15
    commandes[1].y = height / 10
    commandes[1].chiffre = 8
    demande()
    commandes[2].x = width / 2 + height / 15
    commandes[2].y = height / 10
    commandes[2].chiffre = 6
    demande()
    commandes[3].x = width / 2 + 3 * height / 15
    commandes[3].y = height / 10
    commandes[3].chiffre = 7

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()
    
  }

  function demande() {
    commandes[commandes.length] = new commande()
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), ""+calculators[i].a+calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    textSize(height / 30);
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)



    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    stroke(0);
    fill(255);
    rect(width / 7 + width / 15, 3 * height / 15, width / 2, height / 8)
    textSize(width / 100)
    fill(0)
    textAlign(LEFT)
    text("Maintenant à vous de jouer", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (commandes.length == 0) {

      if (lvlLock <= 1) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 2+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau2)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau2)].enterExecuted = false
      mgr.showScene(yeah)
    }
    
    if(pause){
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}

function niveau3() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 4; i < 9; i++) {
      chiffres[i - 4] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    calculators[0] = new calculator("-", width / 5, 2 * height / 3 + height / 15)

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau3)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau3)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau3)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau3)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    demande()
    commandes[0].x = width / 2 - 3 * height / 15
    commandes[0].y = height / 10
    commandes[0].chiffre = 1
    demande()
    commandes[1].x = width / 2 - height / 15
    commandes[1].y = height / 10
    commandes[1].chiffre = 2
    demande()
    commandes[2].x = width / 2 + height / 15
    commandes[2].y = height / 10
    commandes[2].chiffre = 3
    demande()
    commandes[3].x = width / 2 + 3 * height / 15
    commandes[3].y = height / 10
    commandes[3].chiffre = 4

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande()
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), ""+calculators[i].a+calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    textSize(height / 30);
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)



    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    stroke(0);
    fill(255);
    rect(width / 7 + width / 15, 3 * height / 15, width / 2, height / 8)
    textSize(width / 100)
    fill(0)
    textAlign(LEFT)
    text("Un peu de soustraction", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (commandes.length == 0) {

      if (lvlLock <= 2) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 3+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau3)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau3)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if(pause){
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}

function niveau4() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    calculators[0] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau4)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau4)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau4)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau4)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    demande()
    commandes[0].x = width / 2 - 3 * height / 15
    commandes[0].y = height / 10
    commandes[0].chiffre = 12
    demande()
    commandes[1].x = width / 2 - height / 15
    commandes[1].y = height / 10
    commandes[1].chiffre = 21
    demande()
    commandes[2].x = width / 2 + height / 15
    commandes[2].y = height / 10
    commandes[2].chiffre = 20
    demande()
    commandes[3].x = width / 2 + 3 * height / 15
    commandes[3].y = height / 10
    commandes[3].chiffre = 16

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande()
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), ""+calculators[i].a+calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    textSize(height / 30);
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)



    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    stroke(0);
    fill(255);
    rect(width / 7 + width / 15, 3 * height / 15, width / 2, height / 8)
    textSize(width / 100)
    fill(0)
    textAlign(LEFT)
    text("Dernier point, les multiplications", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (commandes.length == 0) {

      if (lvlLock <= 3) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 4+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau4)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau4)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if(pause){
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}

function niveau5() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""
  var dix = 0

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau5)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau5)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau5)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau5)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[1] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[2] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }
    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(30, 10)
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
          dix++
          if (cmpt < 500) {
            cmpt = -50
          }
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), ""+calculators[i].a+calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {

    if (cmpt % 700 == 0) {
      demande()
      cmpt=0
    }
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)

    /// nb commandes réussites
    textSize(height / 45);
    textAlign(LEFT)
    text("commandes réussites : " + dix, 10, height / 15 + 3 * height / 20)
    textAlign(CENTER)

    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    stroke(0);
    fill(255);
    rect(width / 7 + width / 15, 3 * height / 15, width / 2, height / 8)
    textSize(width / 100)
    fill(0)
    textAlign(LEFT)
    text("Ok, maintenant le premier vrai défis, pourrez vous réaliser 10 commande ?", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 4) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 5+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau5)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau5)].enterExecuted = false
      mgr.showScene(yeahMedaille)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        if (commandes[i].update()) {
          commandes.splice(i, 1)
          perdu++
        }
      }
    } else {
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}
      
function niveau6() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""
  var dix = 0

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau6)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau6)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau6)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau6)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[1] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[2] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(40, 20)
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
          dix++
          if (cmpt < 500) {
            cmpt = -50
          }
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), "", calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {

    if (cmpt % 700 == 0) {
      demande()
      cmpt=0
    }
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)

    /// nb commandes réussites
    textSize(height / 45);
    textAlign(LEFT)
    text("commandes réussites : " + dix, 10, height / 15 + 3 * height / 20)
    textAlign(CENTER)

    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 5) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 6+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau6)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau6)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        if (commandes[i].update()) {
          commandes.splice(i, 1)
          perdu++
        }
      }
    } else {
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}
      
function niveau7() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""
  var dix = 0

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau7)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau7)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau7)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau7)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[1] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[2] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(50, 30)
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
          dix++
          if (cmpt < 500) {
            cmpt = -50
          }
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), "", calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {5
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {

    if (cmpt % 700 == 0) {
      demande()
      cmpt=0
    }
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)

    /// nb commandes réussites
    textSize(height / 45);
    textAlign(LEFT)
    text("commandes réussites : " + dix, 10, height / 15 + 3 * height / 20)
    textAlign(CENTER)

    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 6) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 7+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau7)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau7)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        if (commandes[i].update()) {
          commandes.splice(i, 1)
          perdu++
        }
      }
    } else {
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}
      
function niveau8() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""
  var dix = 0

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau8)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau8)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau8)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau8)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[1] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[2] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(60, 40)
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
          dix++
          if (cmpt < 500) {
            cmpt = -50
          }
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), "", calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {

    if (cmpt % 700 == 0) {
      demande()
      cmpt=0
    }
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)

    /// nb commandes réussites
    textSize(height / 45);
    textAlign(LEFT)
    text("commandes réussites : " + dix, 10, height / 15 + 3 * height / 20)
    textAlign(CENTER)

    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 7) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 8+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau8)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau8)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        if (commandes[i].update()) {
          commandes.splice(i, 1)
          perdu++
        }
      }
    } else {
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}
      
function niveau9() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""
  var dix = 0

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau9)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau9)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau9)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau9)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[1] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[2] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(70, 50)
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
          dix++
          if (cmpt < 500) {
            cmpt = -50
          }
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), "", calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {

    if (cmpt % 700 == 0) {
      demande()
      cmpt=0
    }
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)

    /// nb commandes réussites
    textSize(height / 45);
    textAlign(LEFT)
    text("commandes réussites : " + dix, 10, height / 15 + 3 * height / 20)
    textAlign(CENTER)

    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 8) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 9+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau9)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau9)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        if (commandes[i].update()) {
          commandes.splice(i, 1)
          perdu++
        }
      }
    } else {
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}
      
function niveau10() {
  var chiffres = []
  var calculators = []
  var selecte = 0
  var results = []
  var res = 0
  var resboo = false
  var resref = 0
  var scor = 0
  var commandes = []
  var cmpt = 0
  var perdu = 0
  var lvlLock = ""
  var highScore = ""
  var dix = 0

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15,crate)
    }
    
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau10)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau10)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      nom.position(width / 2 - nom.width / 2, 4 * height / 10)
      pause = false
      commandes = []
      dix=0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau10)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau10)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[1] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[2] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    }else{
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock=tab[1]
      scorg=tab[2]
      chair = tab[3] || 0
      table = tab[4] ||0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(80, 20)
  }

  this.mousePressed = function() {
    if (dep.clicked()) {
      results.splice(resref, 1)
      res--
      resref = 0
      for (var i = 0; i < commandes.length; i++) {
        var com = commandes[i].chiffre
        if (resboo && selecte == com) {
          commandes.splice(i, 1)
          scor += com
          dix++
          if (cmpt < 500) {
            cmpt = -50
          }
        }
      }
    }


    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        if (calculators[i].updigit(selecte)) {
          if (resboo) {
            results.splice(resref, 1)
            res--
            resref = 0
          }
        }
        if (calculators[i].a != 0 && calculators[i].b != 0) {
          results[res] = new result(calculators[i].calcul(), "", calculators[i].x + height / 15 + 1, calculators[i].y)
          res++
        }
      }
    }
    for (var i = 0; i < chiffres.length; i++) {
      selecte = chiffres[i].clicked()
      resboo = false
      if (selecte != 0) {
        break
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (selecte != 0) {
        break
      }
      selecte = results[i].clicked()
      resboo = true
      resref = i
      if (selecte != 0) {
        break
      }
    }
  }

  this.draw = function() {

    if (cmpt % 700 == 0) {
      demande()
    }
    background(220);
    image(floork, width/20, height/3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    imageMode(CENTER)
    if(chair==1){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chairw,0,-height/16)
	  rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      rotate(radians(90));
      image(chairw,0,-height/16)
      pop();
    }
    if(table==1){
      image(tablew,width/2+width/8,height/2+height/7)
      image(tablew,width/2+width/4,height/2+5*height/15)
      image(tablew,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 1){
      image(bar1,3*width/4+height/10,height/3+bar1.height/2)
    }
    if(chair==2){
      push();
      translate(width/2+width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+width/4,height/2+5*height/15)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
      push();
      translate(width/2+3*width/8,height/2+height/7)
      image(chaira,0,-height/16)
	  rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      rotate(radians(90));
      image(chaira,0,-height/16)
      pop();
    }
    if(table==2){
      image(tablea,width/2+width/8,height/2+height/7)
      image(tablea,width/2+width/4,height/2+5*height/15)
      image(tablea,width/2+3*width/8,height/2+height/7)
    }
    if(bar == 2){
      image(bar2,3*width/4+height/10,height/3+bar1.height/2)
    }

    imageMode(CORNER)

    ///affichage des chiffres (ingrédients)
    for (var i = 0; i < chiffres.length; i++) {
      chiffres[i].display()
    }

    ///affichages des machines à calculer 
    for (var i = 0; i < calculators.length; i++) {
      calculators[i].display()
    }

    ///affichages des resultats des machines à calculer 
    for (var i = 0; i < results.length; i++) {
      results[i].display()
    }

    ///affichage du chiffre selectioné
    textSize(height / 30);
    text("selection : " + selecte, width / 18, height / 15)
    ///


    /// score test 
    text("score : " + scor, width / 18, height / 15 + 2 * height / 20)

    /// nb commandes réussites
    textSize(height / 45);
    textAlign(LEFT)
    text("commandes réussites : " + dix, 10, height / 15 + 3 * height / 20)
    textAlign(CENTER)

    stroke(0)
    line(width / 2 + width / 15, height / 3, width / 2 + width / 15, height)
    line(width / 20, height / 3, width, height / 3)
    line(width / 20, height / 3, width / 20, 14 * height / 15)
    line(width / 7, 0, width / 7, height / 3)
    line(width / 20, 14 * height / 15, width / 2, 14 * height / 15)
    fill(200, 200, 200)

    ///ligne à commandes
    ellipse(width / 7 + width / 15, height / 15, height / 15, height / 15)
    ellipse(6 * width / 7 - width / 15, height / 15, height / 15, height / 15)
    line(width / 7 + width / 15, height / 30, 6 * width / 7 - width / 15, height / 30)
    line(width / 7 + width / 15, height / 10, 6 * width / 7 - width / 15, height / 10)

    

    if (lvlLock >= 5) {
      fill(255, 153, 51)
      square(width / 2 + width / 7 + width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 10) {
      fill((102, 153, 153))
      square(width / 2 + width / 7 + 2 * width / 15, height / 2, width / 15)
    }
    if (lvlLock >= 20) {
      fill(255, 215, 0)
      square(width / 2 + width / 7 + 3 * width / 15, height / 2, width / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 9) {
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 10+","+gscor+","+chair+","+table+","+bar);
      }else{
        var gscor = parseInt(scorg)
        gscor+=scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock+","+gscor+","+chair+","+table+","+bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau10)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau10)].enterExecuted = false
      mgr.showScene(yeahMedaille)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        if (commandes[i].update()) {
          commandes.splice(i, 1)
          perdu++
        }
      }
    } else {
      fill(255)
      rect(width / 2 - width / 10, height / 4, width / 5, height / 2)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}