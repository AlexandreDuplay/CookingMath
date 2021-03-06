var mgr = new SceneManager();
mgr.wire();
myStorage = window.localStorage;
var user
var cog
var cogmenu
var saveButt
var pause = false
var scorg = ""
var table
var chair
var bar
var json



function downloadt(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


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

function meubles() {
  imageMode(CENTER)
  dep.display()
  if (chair == 1) {
    push();
    translate(width / 2 + width / 8, height / 2 + height / 7)
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    pop();
    push();
    translate(width / 2 + width / 4, height / 2 + 5 * height / 15)
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    pop();
    push();
    translate(width / 2 + 3 * width / 8, height / 2 + height / 7)
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    rotate(radians(90));
    image(chairw, 0, -height / 16)
    pop();
  }
  if (chair == 2) {
    push();
    translate(width / 2 + width / 8, height / 2 + height / 7)
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    pop();
    push();
    translate(width / 2 + width / 4, height / 2 + 5 * height / 15)
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    pop();
    push();
    translate(width / 2 + 3 * width / 8, height / 2 + height / 7)
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    rotate(radians(90));
    image(chaira, 0, -height / 16)
    pop();
  }
  if (table == 1) {
    image(tablew, width / 2 + width / 8, height / 2 + height / 7)
    image(tablew, width / 2 + width / 4, height / 2 + 5 * height / 15)
    image(tablew, width / 2 + 3 * width / 8, height / 2 + height / 7)
  }
  if (table == 2) {
    image(tablea, width / 2 + width / 8, height / 2 + height / 7)
    image(tablea, width / 2 + width / 4, height / 2 + 5 * height / 15)
    image(tablea, width / 2 + 3 * width / 8, height / 2 + height / 7)
  }
  if (bar == 1) {
    image(bar1, 3 * width / 4 + height / 10, height / 3 + bar1.height / 2)
  }
  if (bar == 2) {
    image(bar2, 3 * width / 4 + height / 10, height / 3 + bar1.height / 2)
  }

  imageMode(CORNER)
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
  bronze = loadImage('img/bronze.png');
  silver = loadImage('img/silver.png');
  gold = loadImage('img/gold.png');
  logo = loadImage('img/logoCM.png');
  //salle = loadImage('img/restaurant.png'); 
  restaurant = loadImage('img/restaurantj.jpg')
  best = loadImage('img/best.png');

}



function setup() {

  createCanvas(windowWidth, windowHeight);
  cog.resize(height / 15, height / 15)
  crate.resize(height / 15, height / 15)
  bar1.resize(width / 2 - height / 15, height / 5)
  bar2.resize(width / 2 - height / 15, height / 5)
  chairw.resize(height / 5, height / 5)
  chaira.resize(height / 7, height / 7)
  tablew.resize(height / 7, height / 7)
  tablea.resize(height / 7, height / 7)
  bronze.resize(width / 15, width / 15)
  silver.resize(width / 15, width / 15)
  gold.resize(width / 15, width / 15)
  best.resize(width / 10, width / 10)
  logo.resize(3 * width / 4, 5 * height / 6)
  //salle.resize(width/2-height/15,2*height/3)
  restaurant.resize(2 * height / 3, 2 * height / 3)
  cogmenu = new Clickable(width - 30 - height / 15, 10, cog);
  floork.resize(9 * width / 20, 9 * height / 15)
  cogmenu.onPress = function() {
    if (!pause) {
      pause = true
    } else {
      pause = false
    }
  }


  mgr.showScene(menu);


}

function shop() {
  var lvlLock
  var highScore

  this.setup = function() {

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }



    bar1.resize(height / 4, height / 5)
    bar2.resize(height / 4, height / 5)
    chairw.resize(height / 5, height / 6)
    chaira.resize(height / 7, height / 7)
    tablew.resize(height / 7, height / 7)
    tablea.resize(height / 7, height / 7)

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      bar1.resize(width / 2 - height / 15, height / 5)
      bar2.resize(width / 2 - height / 15, height / 5)
      chairw.resize(height / 5, height / 5)
      chaira.resize(height / 7, height / 7)
      tablew.resize(height / 7, height / 7)
      tablea.resize(height / 7, height / 7)
      mgr.scenes[mgr.findSceneIndex(shop)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(shop)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menuselection);

    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      pause = false
      bar1.resize(width / 2 - height / 15, height / 5)
      bar2.resize(width / 2 - height / 15, height / 5)
      chairw.resize(height / 5, height / 5)
      chaira.resize(height / 7, height / 7)
      tablew.resize(height / 7, height / 7)
      tablea.resize(height / 7, height / 7)
      mgr.scenes[mgr.findSceneIndex(shop)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(shop)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.showScene(menu);
    }

    createCanvas(windowWidth, windowHeight);
    myBut1 = new Clickable(width / 3 + width / 20, height / 6);
    myBut1.text = "acheter, 100 pièces"
    myBut1.onPress = function() {
      if (scorg >= 100) {
        chair = 1
        scorg -= 100
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + scorg + "," + chair + "," + table + "," + bar);
      }
    }
    myBut2 = new Clickable(width / 3 + width / 20, 2 * height / 6);
    myBut2.text = "acheter, 500 pièces"
    myBut2.onPress = function() {
      if (scorg >= 500) {
        chair = 2
        scorg -= 500
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + scorg + "," + chair + "," + table + "," + bar);
      }
    }
    myBut3 = new Clickable(width / 3 + width / 20, 3 * height / 6);
    myBut3.text = "acheter, 200 pièces"
    myBut3.onPress = function() {
      if (scorg >= 200) {
        table = 1
        scorg -= 200
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + scorg + "," + chair + "," + table + "," + bar);
      }
    }
    myBut4 = new Clickable(width / 3 + width / 20, 4 * height / 6);
    myBut4.text = "acheter, 1000 pièces"
    myBut4.onPress = function() {
      if (scorg >= 1000) {
        table = 2
        scorg -= 1000
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + scorg + "," + chair + "," + table + "," + bar);
      }
    }
    myBut5 = new Clickable(2 * width / 3 + width / 20, height / 6);
    myBut5.text = "acheter, 2000 pièces"
    myBut5.onPress = function() {
      if (scorg >= 2000) {
        bar = 1
        scorg -= 2000
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + scorg + "," + chair + "," + table + "," + bar);
      }
    }
    myBut6 = new Clickable(2 * width / 3 + width / 20, 3 * height / 6);
    myBut6.text = "acheter, 3000 pièces"
    myBut6.onPress = function() {
      if (scorg >= 3000) {
        bar = 2
        scorg -= 3000
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + scorg + "," + chair + "," + table + "," + bar);
      }
    }
  }

  this.draw = function() {
    background(235, 220, 180)
    cogmenu.draw()
    text("Pièces: " + scorg, width / 30, 29 * height / 30)
    image(chairw, width / 3 - width / 20, 1 * height / 6);
    image(chaira, width / 3 - width / 20, 2 * height / 6);
    image(tablew, width / 3 - width / 20, 3 * height / 6);
    image(tablea, width / 3 - width / 20, 4 * height / 6);
    image(bar1, 2 * width / 3 - width / 20, 1 * height / 6);
    image(bar2, 2 * width / 3 - width / 20, 3 * height / 6);
    if (chair != 1) {
      myBut1.draw()
    }
    if (chair != 2) {
      myBut2.draw()
    }
    if (table != 1) {
      myBut3.draw()
    }
    if (table != 2) {
      myBut4.draw()
    }
    if (bar != 1) {
      myBut5.draw()
    }
    if (bar != 2) {
      myBut6.draw()
    }

    if (pause) {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
  }
}

function test() {

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    myBut = new Clickable();
    myBut.width = width / 8
    myBut.height = height / 9
    myBut.textSize = height / 25
    myBut.text = "Niveaux"
    myBut.locate(width / 2 - myBut.width / 2, 3 * height / 4);
    myBut.onPress = function() {
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menuselection);
    }
  }

  this.draw = function() {
    background(235, 220, 180)
    textSize(height / 10);
    text("Perdu", width / 2, height / 2)
    myBut.draw()


  }


}

function yeah() {

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    myBut = new Clickable();
    myBut.width = width / 8
    myBut.height = height / 9
    myBut.textSize = height / 25
    myBut.text = "niveaux"
    myBut.locate(width / 3 - myBut.width / 2, 2 * height / 3);
    myBut.onPress = function() {
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    myButm = new Clickable();
    myButm.width = width / 8
    myButm.height = height / 9
    myButm.textSize = height / 25
    myButm.text = "changement de joueur"
    myButm.locate(2 * width / 3 - myButm.width / 2, 2 * height / 3);
    myButm.onPress = function() {
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.showScene(menu);
    }
  }

  this.draw = function() {
    background(235, 220, 180)
    textSize(height / 10);
    text("Niveau Réussi", width / 2, height / 4)
    textSize(height / 30)
    text("Pièces :" + scorg, width / 2, height / 4 + height / 8)
    myBut.draw()
    myButm.draw()
  }
}

function yeahMedaille() {
  var lvlLock = ""
  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    myBut = new Clickable();
    myBut.width = width / 8
    myBut.height = height / 9
    myBut.textSize = height / 25
    myBut.text = "niveaux"
    myBut.locate(width / 3 - myBut.width / 2, 2 * height / 3);
    myBut.onPress = function() {
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    myButm = new Clickable();
    myButm.width = width / 8
    myButm.height = height / 9
    myButm.textSize = height / 25
    myButm.text = "changement de joueur"
    myButm.locate(2 * width / 3 - myButm.width / 2, 2 * height / 3);
    myButm.onPress = function() {
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.showScene(menu);
    }
    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }


  }

  this.draw = function() {
    background(235, 220, 180)
    textSize(height / 10);
    text("Niveau Réussi", width / 2, height / 4)
    myBut.draw()
    myButm.draw()
    textSize(height / 30)
    fill(0)
    text("Vous avez débloqué une nouvelle médaille des 'chefs des maths'", width / 2, 3 * height / 4 + height / 10)
    if (lvlLock >= 4 && lvlLock < 9) {
      image(bronze, width / 2 - height / 30, 3 * height / 4 - width / 15)
    } else if (lvlLock >= 9 && lvlLock < 19) {
      image(silver, width / 2 - height / 30, 3 * height / 4 - width / 15)
    } else if (lvlLock >= 19) {
      image(gold, width / 2 - height / 30, 3 * height / 4 - width / 15)
    }
  }
}

function menuselection() {

  var bouts = []


  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
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
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
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
          case 10:
            bouts[i].onPress = function() {
              mgr.showScene(niveau11);
            }
            break;
          case 11:
            bouts[i].onPress = function() {
              mgr.showScene(niveau12);
            }
            break;
          case 12:
            bouts[i].onPress = function() {
              mgr.showScene(niveau13);
            }
            break;
          case 13:
            bouts[i].onPress = function() {
              mgr.showScene(niveau14);
            }
            break;
          case 14:
            bouts[i].onPress = function() {
              mgr.showScene(niveau15);
            }
            break;
          case 15:
            bouts[i].onPress = function() {
              mgr.showScene(niveau16);
            }
            break;
          case 16:
            bouts[i].onPress = function() {
              mgr.showScene(niveau17);
            }
            break;
          case 17:
            bouts[i].onPress = function() {
              mgr.showScene(niveau18);
            }
            break;
          case 18:
            bouts[i].onPress = function() {
              mgr.showScene(niveau19);
            }
            break;
          case 19:
            bouts[i].onPress = function() {
              mgr.showScene(niveau20);
            }
            break;
        }

      } else {
        bouts[i].color = 100
      }

      saveButt = new Clickable();
      saveButt.text = "télécharger la sauvegarde"
      saveButt.locate(width / 4 - saveButt.width / 2, 5 * height / 6);
      saveButt.onPress = function() {
        downloadt("save.json", '{\n "name" : "' + user + '" ,\n "HS" :' + tab[0] + ' ,\n "lvlL" : ' + tab[1] + ' ,\n "scorg" : ' + tab[2] + ' ,\n "chair" : ' + tab[3] + ' ,\n "table" : ' + tab[4] + ' ,\n "bar" : ' + tab[5] + "\n}")
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
    myButtonsho.text = "magasin"
    myButtonsho.locate(3 * width / 4 - myButtonsho.width / 2, 5 * height / 6);
    myButtonsho.onPress = function() {

      mgr.showScene(shop);
    }
    ///

  }

  this.draw = function() {
    background(235, 220, 180);
    cogmenu.draw()
    saveButt.draw()
    myButtonin.draw()
    myButtonsho.draw()
    textSize(width / 50)
    textAlign(LEFT)
    text("Pièces: " + scorg, width / 100, 29 * height / 30)

    for (var i = 0; i < bouts.length; i++) {
      bouts[i].draw()
    }

    if (pause) {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
  }

}




function menu() {
  var premier = true
  var input
  this.setup = function() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style("z-index", '-1')
    nom = createInput()
    user = ""
    nom.position(width / 4 - nom.width / 2, height / 2)
    myButton1 = new Clickable();
    myButton1.text = "valider"
    myButton1.locate(width / 2 - myButton1.width / 2, 2 * height / 3);
    myButton1.onPress = function() {
      if (nom.value() != "") {
        user = nom.value()
      } else {
        user = sel.value()
      }
      if (user == "") {
        alert("Créez un comptes ou selectionnez en un dans le menu déroulant")
        return
      }
      document.getElementById('target_div').style.display = 'none';
      nom.position(-1000, -1000)
      sel.position(-1000, -1000)
      if (nom.value() != "") {
        mgr.showScene(histoire);
      } else {
        mgr.showScene(menuselection);
      }

    }



    if (premier) {

      input = document.createElement('input');
      input.type = "file";
      document.getElementById('target_div').appendChild(input);
      //input.position(width/8,7*height/8)

      premier = false
    }
    var sel = createSelect()

    sel.option("")
    sel.selected("")

    sel.position(3 * width / 4 - sel.width / 2, height / 2)
    for (var i = 0; i < myStorage.length; i++) {
      sel.option(myStorage.key(i))
    }
    input.addEventListener('change', function(e) {
      const reader = new FileReader()

      reader.onload = receivedText;

      reader.readAsText(input.files[0])
      nom.position(-1000, -1000)
      sel.position(-1000, -1000)
      document.getElementById('target_div').style.display = 'none';
      mgr.showScene(menuselection);
    }, false)

    function receivedText(e) {
      let lines = e.target.result;
      data = JSON.stringify(lines);
      newArr = JSON.parse(lines);
      myStorage.setItem('' + newArr.name, "" + newArr.HS + "," + newArr.lvlL + "," + newArr.scorg + "," + newArr.chair + "," + newArr.table + "," + newArr.bar);
      user = '' + newArr.name
    }

    document.getElementById('target_div').style.display = 'block';
  }


  this.draw = function() {

    background(235, 220, 180)
    myButton1.draw()
    //myButton2.draw()
    stroke(0)
    //textSize(width / 10) 
    //text("Cooking Math", width / 2, height / 5)
    imageMode(CENTER)
    image(logo, width / 2, height / 5)
    textSize(width / 30)
    text("Ou", width / 2, 9 * height / 20)
    text("Nouveau compte:", width / 4, 9 * height / 20)
    text("Comptes existant:", 3 * width / 4, 9 * height / 20)
    //line(width/2,0,width/2,height)

  }
}

function histoire() {
  var txt = 0
  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
  }

  this.mousePressed = function() {
    txt++
  }

  this.draw = function() {
    background(235, 220, 180)
    textSize(width / 75)

    text("cliquez pour continuer", width / 2, 14 * height / 15)
    textSize(width / 50)
    textAlign(LEFT)
    fill(0)
    if (txt == 0) {
      text("Un beau matin vous recevez une lettre de votre grand-père", 5, height / 9)
    }
    if (txt >= 1) {
      text("Bonjour " + user + ".", 5, 2.5 * height / 9)
      text("J'èspère que tu vas bien, Je t'envoie cette lettre car j'ai décidé de quitter la restauration des chiffres.", 5, 3 * height / 9)
    }
    if (txt >= 2) {
      text("Grâce à mes économie, je peux enfin réaliser mon rève, je suis donc parti vivre aux Bahamas.", 5, 3.5 * height / 9)
    }
    if (txt >= 3) {
      text("Mais je ne pouvais pas juste vendre mon vieux restaurant à n'importe qui.", 5, 4 * height / 9)
    }
    if (txt >= 4) {
      text("Comme je sais que tu adores les maths culinaires j'ai décidé de te donner les clès.", 5, 4.5 * height / 9)
    }
    if (txt >= 5) {
      text("Sur ce, bonne chance, moi je vais siroter des noix de coco.", 5, 5 * height / 9)
    }
    if (txt >= 6) {
      text("À Bientôt, GP.", 5, 5.5 * height / 9)
    }
    if (txt >= 7) {
      textAlign(CENTER)
      txt = 0
      mgr.showScene(menuselection);
    }
  }
}


function journal() {
  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
  }

  this.mousePressed = function() {
    mgr.showScene(menuselection)
  }

  this.draw = function() {
    background(235, 220, 180)
    textAlign(CENTER)
    textSize(width / 20)
    fill(0)
    text("Guide Mathlin", width / 2, height / 12)
    line(width / 8, 0, width / 8, height)
    line(width / 8, 7 * height / 8, width, 7 * height / 8)
    image(restaurant, width / 8 + width / 100, height / 6)
    textSize(width / 60)
    textAlign(LEFT)
    text("Le restaurant du/(de la) jeune chef " + user + " est officiellement le ", width / 8 + 2 * height / 3 + width / 50, 3 * height / 12)
    text("meilleur restaurant du pays. Nos agents lui ont doné la plus grande", width / 8 + 2 * height / 3 + width / 50, 3.5 * height / 12)
    text("récompense jamais donnée.", width / 8 + 2 * height / 3 + width / 50, 4 * height / 12)
    text("'La coupe des signes'", width / 8 + 2 * height / 3 + width / 50, 4.5 * height / 12)
    image(best, width / 8 + 2 * height / 3 + width / 50, height / 2 - width / 20)
    fill(150)
    rect(width / 100, height / 75, width / 8 - width / 50, width / 8 - width / 100, 20, 20, 20, 20)
    fill(100)
    for (var i = 0; i < 28; i++) {
      rect(width / 100, (20 + 2 * i) * height / 75, width / 8 - width / 50, height / 50, 20, 20, 20, 20)
    }
    for (var i = 0; i < 5; i++) {
      rect(width / 8 + width / 100, (66 + 2 * i) * height / 75, 6.5 * width / 8, height / 50, 20, 20, 20, 20)
    }

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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }



    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      mgr.scenes[mgr.findSceneIndex(sketch)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(sketch)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      pause = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }


    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }

    /// création des calculator
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[1] = new calculator("+", 2 * width / 5, height / 3 + height / 15)
    calculators[2] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[3] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)
    ///

    ///zone de dépot des commandes
    dep = new depot()


  }

  function demande() {
    var commsize = commandes.length
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
          if (cmpt < 500 && commandes.length < 1) {
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
    if (scor > highScore) {
      highScore = scor
    }


    if (cmpt % 700 == 0) {
      demande()
      cmpt = 0
    }
    background(255)
    cogmenu.draw()
    image(floork, width / 20, height / 3);
    meubles()


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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)

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
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    for (var i = 0; i < perdu; i++) {
      fill(255, 0, 0)
      square(width / 7 + (i * 2) * height / 15 + height / 30, height / 4, height / 15)
    }

    if (perdu >= 3) {
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      commandes = []
      var gscor = parseInt(scorg)
      var bb = gscor + scor
      cmpt = 0
      myStorage.setItem('' + user, "");
      myStorage.setItem('' + user, "" + highScore + "," + Math.max(floor(highScore / 100), lvlLock) + "," + bb + "," + chair + "," + table + "," + bar);
      perdu = 0
      scor = 0
      mgr.showScene(test);
    }

    if (!pause) {
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        if (commandes[i].updat()) {
          commandes.splice(i, 1)
          perdu++
        }
      }
      cmpt++
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }

    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        for (var i = 0; i < calculators.length; i++) {
          calculators[i].c = [0, 200, 150]
        }
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
    chiffres[0] = new chiffre(6, width / 20, height / 2, crate)
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
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau1)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau1)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    background(255)
    image(floork, width / 20, height / 3);
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }
    cogmenu.draw()
    dep.display()
    meubles()
    //image(salle, width/2+width/15,height/3)

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)



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
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    textAlign(LEFT)
    var col1 = [0, 0, 0];
    var col2 = [250, 220, 140];
    var col3 = [200, 150, 100];
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
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 1 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau1)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau1)].enterExecuted = false
      mgr.showScene(yeah)
    }



    textAlign(CENTER);

    if (pause) {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
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

      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau2)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau2)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(18, 10)


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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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

    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)



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
    text("4 petites additions", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (commandes.length == 0) {

      if (lvlLock <= 1) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 2 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau2)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau2)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (pause) {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
  var dix = 0

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 9; i++) {
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
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
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau3)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau3)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[0].blocka = true
    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(18, 10)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = Math.floor(Math.random() * (18 - 10 + 1)) + 10
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }


    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    text("Maintenant, peux-tu réalliser 10 commandes ?", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 2) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 3 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau3)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau3)].enterExecuted = false
      mgr.showScene(yeah)
    }

    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }

    if (calculators[0].a == 0 && results.length == 0 && commandes.length > 0) {
      calculators[0].a = Math.floor(Math.random() * (9 - (commandes[0].chiffre-9) + 1)) + (commandes[0].chiffre-9)
    }

    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
  var dix = 0

  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 4; i < 9; i++) {
      chiffres[i - 4] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    calculators[0] = new calculator("-", width / 5, 2 * height / 3 + height / 15)

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
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau4)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau4)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)



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
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (commandes.length == 0) {

      if (lvlLock <= 3) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 4 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau4)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau4)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (pause) {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau5)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau5)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau5)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau5)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    calculators[0] = new calculator("-", width / 5, height / 3 + height / 15)
    calculators[0].blocka = true
    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(8, 1)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = Math.floor(Math.random() * (8 - 1 + 1)) + 1
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    if (calculators[0].a == 0 && results.length == 0 && commandes.length > 0) {
      calculators[0].a = Math.floor(Math.random() * (9 - commandes[0].chiffre + 1) + commandes[0].chiffre) + 1
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    text("Maintenant des soustractions", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 4) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 5 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
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
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    calculators[0] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau6)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau6)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau6)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau6)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    text("Dernier point, les multiplications", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (commandes.length == 0) {

      if (lvlLock <= 5) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 6 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau6)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau6)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (pause) {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau7)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau7)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau7)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau7)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    calculators[0] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(1, 0)
    commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 2 + 1)) + 2) * (Math.floor(Math.random() * (5 - 2 + 1)) + 2))
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 2 + 1)) + 2) * (Math.floor(Math.random() * (5 - 2 + 1)) + 2))
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    text("Allez 10 commandes", width / 7 + width / 14, 3 * height / 15 + height / 45)
    textAlign(CENTER)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 6) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 7 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
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
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau8)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau8)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau8)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau8)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    //calculators[1] = new calculator("-", width / 5, 2*height / 3 + height / 15)
    calculators[1] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(1, 0)
    commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (1 - 0 + 1)) - 0)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (1 - 0 + 1)) - 0)
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    fill(0)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 7) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 8 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
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
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau9)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau9)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau9)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau9)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    //calculators[1] = new calculator("-", width / 5, 2*height / 3 + height / 15)
    calculators[1] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(1, 0)
    commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (2 - 1 + 1)) + 1)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (2 - 1 + 1)) + 1)
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    fill(0)


    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 8) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 9 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
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
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau10)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau10)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau10)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau10)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    //calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[0] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[1] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(1, 0)
    commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (0 + 1 + 1)) - 1)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (0 + 1 + 1)) - 1)
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    fill(0)


    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 9) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 10 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau10)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau10)].enterExecuted = false
      mgr.showScene(yeahMedaile)
    }

    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau11() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau11)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau11)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau11)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau11)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menu);
    }
    //calculators[0] = new calculator("+", width / 5, height / 3 + height / 15)
    calculators[0] = new calculator("-", width / 5, 2 * height / 3 + height / 15)
    calculators[1] = new calculator("x", 2 * width / 5, 2 * height / 3 + height / 15)

    var saveP = myStorage.getItem('' + user)
    if (myStorage.getItem('' + user) == null) {
      lvlLock = 0
      scorg = 0
      chair = 0
      table = 0
      bar = 0
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(1, 0)
    commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (0 + 1 + 1)) - 1) - 1
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (0 + 1 + 1)) - 1) - 1
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    fill(0)


    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 10) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 11 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau11)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau11)].enterExecuted = false
      mgr.showScene(yeah)
    }

    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau12() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau12)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau12)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau12)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau12)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(1, 0)
    commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (1 + 1 + 1)) - 1)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (1 + 1 + 1)) - 1)
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    fill(0)


    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }
    if (dix == 10) {

      if (lvlLock <= 11) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 12 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau12)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau12)].enterExecuted = false
      mgr.showScene(yeah)
    }

    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau13() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau13)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau13)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau13)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau13)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(1, 0)
    commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (2 + 2 + 1)) - 2)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (2 + 2 + 1)) - 2)
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    fill(0)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 12) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 13 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau13)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau13)].enterExecuted = false
      mgr.showScene(yeah)
    }

    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau14() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }
    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau14)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau14)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau14)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau14)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(1, 0)
    commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (3 + 3 + 1)) - 3)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = ((Math.floor(Math.random() * (9 - 3 + 1)) + 3) * (Math.floor(Math.random() * (5 - 3 + 1)) + 3)) + (Math.floor(Math.random() * (3 + 3 + 1)) - 3)
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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
    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()
    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)
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
    fill(0)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 13) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 14 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau14)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau14)].enterExecuted = false
      mgr.showScene(yeah)
    }

    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau15() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau15)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau15)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau15)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau15)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }
    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(30, 10)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = Math.floor(Math.random() * (30 - 10 + 1)) + 10
        i = -1
      }
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
          results[res] = new result(calculators[i].calcul(), "" + calculators[i].a + calculators[i].b, calculators[i].x + height / 15 + 1, calculators[i].y)
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

    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)

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
    fill(0)

    if (lvlLock >= 5) {
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 14) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 15 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau15)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau15)].enterExecuted = false
      mgr.showScene(yeahMedaille)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau16() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau16)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau16)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau16)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau16)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(40, 20)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = Math.floor(Math.random() * (40 - 20 + 1)) + 20
        i = -1
      }
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

    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)

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
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 15) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 16 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau16)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau16)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau17() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau17)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau17)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau17)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau17)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(50, 30)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = Math.floor(Math.random() * (50 - 30 + 1)) + 30
        i = -1
      }
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
        5
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

    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)

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
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 16) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 17 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau17)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau17)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau18() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau18)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau18)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau18)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau18)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(60, 40)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = Math.floor(Math.random() * (60 - 40 + 1)) + 40
        i = -1
      }
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

    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)

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
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 17) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 18 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau18)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau18)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau19() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau19)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau19)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {

      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau19)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau19)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(70, 50)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = Math.floor(Math.random() * (70 - 50 + 1)) + 50
        i = -1
      }
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

    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)

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
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 18) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 19 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau19)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau19)].enterExecuted = false
      mgr.showScene(yeah)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}

function niveau20() {
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
      chiffres[i] = new chiffre(i + 1, width / 20, 2 * height / 15 + (10 - i + 1) * height / 15, crate)
    }

    lvlselect = new Clickable();
    lvlselect.locate(width / 2 - lvlselect.width * 1.5, height / 2);
    lvlselect.text = "Selection du niveau"
    lvlselect.onPress = function() {
      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau20)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau20)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false
      mgr.showScene(menuselection);
    }
    peopleselect = new Clickable();
    peopleselect.locate(width / 2 + peopleselect.width / 2, height / 2);
    peopleselect.text = "Selection du joueur"
    peopleselect.onPress = function() {
      pause = false
      commandes = []
      dix = 0
      scor = 0
      mgr.scenes[mgr.findSceneIndex(niveau20)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau20)].enterExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menu)].enterExecuted = false
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
    } else {
      var tab = saveP.split(',')
      highScore = tab[0]
      lvlLock = tab[1]
      scorg = tab[2]
      chair = tab[3] || 0
      table = tab[4] || 0
      bar = tab[5] || 0
    }

    ///zone de dépot des commandes
    dep = new depot()

  }

  function demande() {
    commandes[commandes.length] = new commande(80, 20)
    for (var i = 0; i < commandes.length - 1; i++) {
      if (commandes[i].chiffre == commandes[commandes.length - 1].chiffre) {
        commandes[commandes.length - 1].chiffre = Math.floor(Math.random() * (80 - 20 + 1)) + 20
        i = -1
      }
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

    if ((cmpt >= 700 || cmpt == 0) && commandes.length <= 4) {
      demande()
      cmpt = 0
    }
    background(255)
    image(floork, width / 20, height / 3);
    cogmenu.draw()

    for (var i = 0; i < commandes.length; i++) {
      commandes[i].display()
    }

    dep.display()
    meubles()

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
    text("pièces : " + scor, width / 18, height / 15 + 2 * height / 20)

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
      image(bronze, width / 2 + width / 7 + width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 10) {
      image(silver, width / 2 + width / 7 + 2 * width / 15, height / 4 - height / 15)
    }
    if (lvlLock >= 15) {
      image(gold, width / 2 + width / 7 + 3 * width / 15, height / 4 - height / 15)
    }

    if (dix == 10) {

      if (lvlLock <= 19) {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "");
        myStorage.setItem('' + user, "" + highScore + "," + 19 + "," + gscor + "," + chair + "," + table + "," + bar);
      } else {
        var gscor = parseInt(scorg)
        gscor += scor
        myStorage.setItem('' + user, "" + highScore + "," + lvlLock + "," + gscor + "," + chair + "," + table + "," + bar);
      }
      scor = 0
      dix = 0
      cmpt = 0
      mgr.scenes[mgr.findSceneIndex(menuselection)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(menuselection)].enterExecuted = false

      mgr.scenes[mgr.findSceneIndex(niveau20)].setupExecuted = false
      mgr.scenes[mgr.findSceneIndex(niveau20)].enterExecuted = false
      mgr.showScene(journal)
    }
    if (!pause) {
      cmpt++
      for (var i = 0; i < commandes.length; i++) {
        commandes[i].display()
        commandes[i].update()
      }
    } else {
      fill(100, 240)
      rect(width / 4, height / 4, width / 2, height / 2, height / 30, height / 30, height / 30, height / 30)
      fill(0)
      textSize(height / 20)
      text("Pause", width / 2, height / 4 + height / 15)
      lvlselect.draw()
      peopleselect.draw()
    }
    if (selecte != 0) {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [0, 200, 150]
      }
      textSize(width / 30)
      fill(0)
      text("" + selecte, mouseX, mouseY)
    } else {
      for (var i = 0; i < calculators.length; i++) {
        calculators[i].c = [100, 100, 200]
      }
    }
  }
}