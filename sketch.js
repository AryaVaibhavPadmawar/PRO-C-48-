var singingchild;
var singingchildImg;
var maaybhavanisound;
var mardmarathasound;
var mannmeshivasound;
var ommangalammissionmangalamsound;
var jaijaishivshankarsound;
var terimittisound;
var ghungroosound;
var chogadatarasound;
var buttonMardMaratha;
var buttonJaiJaiShivShankar;
var buttonMaayBhavani
var buttonChogadaTara;
var buttonGhungroo;
var buttonTeriMitti
var buttonOmMangalamMissionMangalam;
var buttonMannMeShiva;


function preload() {
  singingchildImg = loadImage("singingboy.jpg");
  maaybhavanisound = loadSound("maaybhavani.mp3");
  terimittisound = loadSound("terimitti.mpeg");
  mardmarathasound = loadSound("mardmaratha.mp3");
  mannmeshivasound = loadSound("mannmeshiva.mp3");
  ommangalammissionmangalamsound = loadSound("missionmangalam.mp3");
  chogadatarasound = loadSound("chogada.mp3");
  ghungroosound = loadSound("ghungroo.mp3");
  jaijaishivshankarsound = loadSound("shivshankar.mp3")

}
function setup() {
  createCanvas(windowWidth, windowHeight);

  buttonMardMaratha = createButton('MardMaratha');
  buttonMardMaratha.position(150, 350);

  buttonMannMeShiva = createButton('MannMeShiva');
  buttonMannMeShiva.position(255, 350);

  buttonMaayBhavani = createButton('MaayBhavani');
  buttonMaayBhavani.position(375, 350);

  buttonOmMangalamMissionMangalam = createButton('OmMangalamMissionMangalam');
  buttonOmMangalamMissionMangalam.position(480, 350);

  buttonJaiJaiShivShankar = createButton('JaiJaiShivShankar');
  buttonJaiJaiShivShankar.position(225, 380);

  buttonTeriMitti = createButton('TeriMitti');
  buttonTeriMitti.position(355, 380);

  buttonGhungroo = createButton('Ghungroo');
  buttonGhungroo.position(425, 380);

  buttonChogadaTara = createButton('ChogadaTara');
  buttonChogadaTara.position(505, 380);

  
  


}

function draw() {
  background(singingchildImg);

  buttonMaayBhavani.mousePressed(() => {
    maaybhavanisound.play();
    terimittisound.pause();
    mardmarathasound.pause();
    mannmeshivasound.pause();
    ommangalammissionmangalamsound.pause();
    jaijaishivshankarsound.pause();
    ghungroosound.pause();
    chogadatarasound.pause();
  })

  buttonTeriMitti.mousePressed(() => {
    terimittisound.play();
    maaybhavanisound.pause();
    mardmarathasound.pause();
    mannmeshivasound.pause();
    ommangalammissionmangalamsound.pause();
    jaijaishivshankarsound.pause();
    ghungroosound.pause();
    chogadatarasound.pause();
  })

  buttonMardMaratha.mousePressed(() => {
    mardmarathasound.play();
    terimittisound.pause();
    maaybhavanisound.pause();
    mannmeshivasound.pause();
    ommangalammissionmangalamsound.pause();
    jaijaishivshankarsound.pause();
    ghungroosound.pause();
    chogadatarasound.pause();
  })

  buttonMannMeShiva.mousePressed(() => {
    mannmeshivasound.play();
    terimittisound.pause();
    mardmarathasound.pause();
    maaybhavanisound.pause();
    ommangalammissionmangalamsound.pause();
    jaijaishivshankarsound.pause();
    ghungroosound.pause();
    chogadatarasound.pause();
  })

  buttonOmMangalamMissionMangalam.mousePressed(() => {
    ommangalammissionmangalamsound.play();
    terimittisound.pause();
    mardmarathasound.pause();
    mannmeshivasound.pause();
    maaybhavanisound.pause();
    jaijaishivshankarsound.pause();
    ghungroosound.pause();
    chogadatarasound.pause();
  })

  buttonJaiJaiShivShankar.mousePressed(() => {
    jaijaishivshankarsound.play();
    terimittisound.pause();
    mardmarathasound.pause();
    mannmeshivasound.pause();
    ommangalammissionmangalamsound.pause();
    maaybhavanisound.pause();
    ghungroosound.pause();
    chogadatarasound.pause();
  })

  buttonGhungroo.mousePressed(() => {
    ghungroosound.play();
    terimittisound.pause();
    mardmarathasound.pause();
    mannmeshivasound.pause();
    ommangalammissionmangalamsound.pause();
    jaijaishivshankarsound.pause();
    maaybhavanisound.pause();
    chogadatarasound.pause();
  })

  buttonChogadaTara.mousePressed(() => {
    chogadatarasound.play();
    terimittisound.pause();
    mardmarathasound.pause();
    mannmeshivasound.pause();
    ommangalammissionmangalamsound.pause();
    jaijaishivshankarsound.pause();
    ghungroosound.pause();
    maaybhavanisound.pause();
  })

  drawSprites();
}