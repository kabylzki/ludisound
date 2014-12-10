var options = {
    size: {x: 64, y: 32},
    minRoomSize: {x: 4, y: 4},
    maxRoomSize: {x: 16, y: 16},
    maxRooms: 24,
    showGrid: false,
    algorithm: 'RoomMaze',
    colors: {},
    regenerate: function () {
        var timeStart = Date.now();
        var timeEnd = Date.now();
        grid = window[options.algorithm].generate(options.size, options.minRoomSize, options.maxRoomSize, options.maxRooms),
                time.textContent = (timeEnd - timeStart);
        scale.x = ~~(canvas.width / options.size.x);
        scale.y = ~~(canvas.height / options.size.y);
        clear();
        if (grid)
            drawGridMap(grid);
        if (options.showGrid)
            drawGridLines();
    }
},
gui,
        canvas,
        ctx,
        time,
        scale = {x: 1, y: 1},
algorithms = {
    'Room Maze': 'RoomMaze',
    'Simple': 'Simple',
    'ROT.Digger': 'Digger',
    'ROT.Rogue': 'Rogue',
    'ROT.Uniform': 'Uniform'
},
tiles = {
    floor: {x: 112, y: 64},
    wall: {x: 208, y: 48},
    wall_n: {x: 208, y: 48},
    wall_s: {x: 112, y: 128},
    wall_e: {x: 224, y: 208},
    wall_w: {x: 192, y: 142},
    corner: {x: 192, y: 48},
    corner_n: {x: 192, y: 48},
    corner_s: {x: 128, y: 128},
    corner_e: {x: 160, y: 128},
    corner_w: {x: 96, y: 128},
    size: {x: 16, y: 16}
},
texture = new Image(),
        resizeDrawWait = 250,
        resizeDrawTimeout = null;
texture.src = 'include/images/cave_034-Tileset.png';
options.colors[helpers.TILE_TYPE.EMPTY] = '#111';
options.colors[helpers.TILE_TYPEFLOOR] = 'rgba(100, 100, 100, 0.8)';
options.colors[helpers.TILE_TYPE.WALL] = 'rgba(246, 203, 24, 0.8)';
options.colors.grid = 'rgba(255, 255, 255, 0.2)';

var timeInfo = {
    default_add: 30,
    add: 0,
    last_seconds: false
};

var gameInfo = {
    defaultTime: "00:01:30",
    timeRemaining: "00:01:30",
    stage: 1
};
var heroInfo = {
    posX: 512,
    posY: 256,
    state: "normal",
    sphereLevel: 0,
    healthPoint: 3,
    monsterKilled: 0,
    enragedUsed: 0,
    chestTaken: 0,
    clockTaken: 0,
    score: 0,
};
var monsterInfo = {
    posX: 512,
    posY: 256
};
tabMonster = [];
tabChest = [];
tabSphere = [];
tabStair = [];
tabClock = [];

// Variable images
var heroImage = new Image();
heroImage.src = "include/images/hero.png";
var floorImage = new Image();
floorImage.src = "include/images/floor.png";
var chestImage = new Image();
chestImage.src = "include/images/chest.png";
// Monsters
var monsterImage = new Image();
monsterImage.src = "include/images/monster.png";
var monsterImage1 = new Image();
monsterImage1.src = "include/images/monster-level-1.png";
var monsterImage2 = new Image();
monsterImage2.src = "include/images/monster-level-2.png";
var monsterImage3 = new Image();
monsterImage3.src = "include/images/monster-level-3.png";
var monsterImage4 = new Image();
monsterImage4.src = "include/images/monster-level-4.png";
var monsterImage5 = new Image();
monsterImage5.src = "include/images/monster-level-5.png";
// Sphere
var sphereImage = new Image();
sphereImage.src = "include/images/sphere-level.png";
// Stairs
var stairImage = new Image();
stairImage.src = "include/images/stair.png";
// Clock
var clockImage = new Image();
clockImage.src = "include/images/clock.png";
// Bones
var bonesImage = new Image();
bonesImage.src = "include/images/bones-3.png";

// Effectue une opération arithmétique entre 2 variables
operators = {
    '+': function (a, b) {
        return a + b;
    },
    '-': function (a, b) {
        return a - b;
    }
};

// Initialise une partie
function init() {
    // vide les tableaux avant la nouvelle partie ou le passage de niveau
    tabMonster = [];
    tabChest = [];
    tabSphere = [];
    tabStair = [];
    tabClock = [];

    // Récupération du canvas
    canvas = document.getElementById('view');
    time = document.getElementById('time');
    ctx = ctx = canvas.getContext('2d');
    // Génère ou Regénère
    resize(true);
    options.regenerate();

    // Remet la position du Héro au milieu du plateau
    heroInfo.posX = 512;
    heroInfo.posY = 256;
    // Place 1 Hero (in the center)
    initHero(null, null, heroInfo.state);

    // Place 5 chests randomly
    initImageObject(null, null, 5, tabChest, chestImage);
    // Place 1 exit randomly
    initImageObject(null, null, 1, tabStair, stairImage);

    // Place 1 sphere-level & 1 clock Si nous ne somme pas au premier niveau
    if (gameInfo.stage > 1) {
        initImageObject(null, null, 1, tabSphere, sphereImage);
        initImageObject(null, null, 1, tabClock, clockImage);
    }

    switch (gameInfo.stage) {
        case 1:
            initImageObject(null, null, 10, tabMonster, monsterImage, 0);
            break;
        case 2:
            initImageObject(null, null, 7, tabMonster, monsterImage, 0);
            initImageObject(null, null, 8, tabMonster, monsterImage1, 1);
            break;
        case 3:
            initImageObject(null, null, 5, tabMonster, monsterImage, 0);
            initImageObject(null, null, 5, tabMonster, monsterImage1, 1);
            initImageObject(null, null, 10, tabMonster, monsterImage2, 2);
            break;
        case 4:
            initImageObject(null, null, 5, tabMonster, monsterImage, 0);
            initImageObject(null, null, 5, tabMonster, monsterImage1, 1);
            initImageObject(null, null, 5, tabMonster, monsterImage2, 2);
            initImageObject(null, null, 5, tabMonster, monsterImage3, 3);
            break;
        case 5:
            initImageObject(null, null, 5, tabMonster, monsterImage1, 1);
            initImageObject(null, null, 3, tabMonster, monsterImage2, 2);
            initImageObject(null, null, 3, tabMonster, monsterImage3, 3);
            initImageObject(null, null, 3, tabMonster, monsterImage4, 4);
            break;
        case 6:
            initImageObject(null, null, 5, tabMonster, monsterImage1, 1);
            initImageObject(null, null, 3, tabMonster, monsterImage2, 2);
            initImageObject(null, null, 3, tabMonster, monsterImage3, 3);
            initImageObject(null, null, 3, tabMonster, monsterImage4, 4);
            initImageObject(null, null, 3, tabMonster, monsterImage5, 5);
            break;
    }

    /*
     ctx.font = "20px Georgia";
     ctx.fillStyle = "white";
     ctx.fillText("Hello World!", 10, 50);*/
}

function initGui() {
    var fsz = gui.addFolder('Size');
    fsz.add(options.size, 'x', 16, 256).step(1).onChange(resize);
    fsz.add(options.size, 'y', 16, 256).step(1).onChange(resize);
    var frsz = gui.addFolder('Min Room Size');
    frsz.add(options.minRoomSize, 'x', 4, 16).step(1);
    frsz.add(options.minRoomSize, 'y', 4, 16).step(1);
    var fmrsz = gui.addFolder('Max Room Size');
    fmrsz.add(options.maxRoomSize, 'x', 8, 32).step(1);
    fmrsz.add(options.maxRoomSize, 'y', 8, 32).step(1);
    gui.add(options, 'maxRooms', 0, 32).step(1);
    gui.add(options, 'showGrid').onChange(options.regenerate);
    gui.add(options, 'algorithm', algorithms).onChange(options.regenerate);
    gui.add(options, 'regenerate');
}

function initHero(posX, posY, state) {
    if (posX === null)
        posX = 512;
    if (posY === null)
        posY = 256;
    if (state === null)
        state = "normal";

    if (state === "normal") {
        heroImage.src = "include/images/hero.png";
    } else if (state === "enraged") {
        heroImage.src = "include/images/hero-enraged.png";
    } else if (state === "tired") {
        heroImage.src = "include/images/hero-tired.png";
    }

    ctx.drawImage(heroImage, posX, posY);
}


function initMonster(posX, posY) {
    ctx.drawImage(monsterImage, posX, posY);
}

// initialise un objet
function initImageObject(posX, posY, cpt, tab, image, level) {
    if (posX === null)
        posX = 16 * 16;
    if (posY === null)
        posY = 16 * 16;
    for (var x = 0; x < cpt; x++) {
        var randPos = Math.floor(Math.random() * tabFloor.length);
        var randPosX = tabFloor[randPos].posX;
        var randPosY = tabFloor[randPos].posY;
        if (level !== null) {
            var blockInfo = {
                posX: randPosX,
                posY: randPosY,
                level: level
            };
        } else {
            var blockInfo = {
                posX: randPosX,
                posY: randPosY
            };
        }
        // Ajoute la case dans la liste des cases de monstre
        tab.push(blockInfo);
        // La case n'est plus de type Floor
        var index = tabFloor.indexOf(tabFloor[randPos]);
        if (index > -1) {
            tabFloor.splice(index, 1);
        }
        // Créer l'image du monstre
        ctx.drawImage(image, randPosX * 16, randPosY * 16);
    }
}

function clearInfoHero() {
    document.getElementById("info-stage").innerHTML = 1;
    document.getElementById("info-sphere").innerHTML = 0;
    document.getElementById("info-health").innerHTML = 3;
    document.getElementById("info-enraged").innerHTML = 0;
    document.getElementById("info-monster").innerHTML = 0;
    document.getElementById("info-chest").innerHTML = 0;
    document.getElementById("info-clock").innerHTML = 0;
    document.getElementById("info-score").innerHTML = 0;
}

// Initialise (et met à jour) les infos du joueur (le hero)
function initInfoHero(type, op, nb) {
    switch (type) {
        case "stage":
            gameInfo.stage = operators[op](gameInfo.stage, nb);
            document.getElementById("info-stage").innerHTML = gameInfo.stage;
            break;
        case "sphere":
            heroInfo.sphereLevel = operators[op](heroInfo.sphereLevel, nb);
            document.getElementById("info-sphere").innerHTML = heroInfo.sphereLevel;
            break;
        case "health":
            heroInfo.healthPoint = operators[op](heroInfo.healthPoint, nb);
            document.getElementById("info-health").innerHTML = heroInfo.healthPoint;
            break;
        case "enraged":
            heroInfo.enragedUsed = operators[op](heroInfo.enragedUsed, nb);
            document.getElementById("info-enraged").innerHTML = heroInfo.enragedUsed;
            break;
        case "monster":
            heroInfo.monsterKilled = heroInfo.monsterKilled + 1;
            document.getElementById("info-monster").innerHTML = heroInfo.monsterKilled;
            break;
        case "chest":
            heroInfo.chestTaken = operators[op](heroInfo.chestTaken, nb);
            document.getElementById("info-chest").innerHTML = heroInfo.chestTaken;
            break;
        case "clock":
            heroInfo.clockTaken = operators[op](heroInfo.clockTaken, nb);
            document.getElementById("info-clock").innerHTML = heroInfo.clockTaken;
            break;
    }

    // Mise à jour du Score à chaque mise à jour d'info
    heroInfo.score = ((gameInfo.stage - 1) * 10) + (heroInfo.sphereLevel * 10) - (heroInfo.enragedUsed * 10) + (heroInfo.monsterKilled * 3) + (heroInfo.chestTaken * 6);
    document.getElementById("info-score").innerHTML = heroInfo.score;
}

// check if we are on the floor
function isFloor(posX, posY) {
    for (var x = 0; x < tabFloor.length; ++x) {
        if ((tabFloor[x].posX === (posX / 16)) && (tabFloor[x].posY === (posY / 16))) {
            return true;
        }
    }
    return false;
}

// check if we hit a wall
function isWall(posX, posY) {
    for (var x = 0; x < tabWall.length; ++x) {
        if ((tabWall[x].posX === (posX / 16)) && (tabWall[x].posY === (posY / 16))) {
            return true;
        }
    }
    return false;
}

// Check if we encounter a monster (stronger or not)
function isMonster(posX, posY) {
    var my_return = true;
    for (var x = 0; x < tabMonster.length; ++x) {
        if ((tabMonster[x].posX === (posX / 16)) && (tabMonster[x].posY === (posY / 16))) {
            // Si le monstre a un niveau supérieur Il nous enlève un point de vie.
            if (heroInfo.sphereLevel >= tabMonster[x].level) {
                initInfoHero("monster", "+", 1);
            } else {
                initInfoHero("health", "-", 1);
                my_return = "stronger";
            }

            // Supprime la case (dans le tableau)
            var index = tabMonster.indexOf(tabMonster[x]);
            if (index > -1) {
                tabMonster.splice(index, 1);
            }
            return my_return;
        }
    }
    return false;
}

// Check if we encounter a chest
function isChest(posX, posY) {
    for (var x = 0; x < tabChest.length; ++x) {
        if ((tabChest[x].posX === (posX / 16)) && (tabChest[x].posY === (posY / 16))) {
            // Supprime la case (dans le tableau) du chest qui vient d'être récupéré
            var index = tabChest.indexOf(tabChest[x]);
            if (index > -1) {
                tabChest.splice(index, 1);
            }
            initInfoHero("chest", "+", 1);
            return true;
        }
    }
    return false;
}

// Check if we encounter a chest
function isSphere(posX, posY) {
    for (var x = 0; x < tabSphere.length; ++x) {
        if ((tabSphere[x].posX === (posX / 16)) && (tabSphere[x].posY === (posY / 16))) {
            // Supprime la case (dans le tableau) du chest qui vient d'être récupéré
            var index = tabSphere.indexOf(tabSphere[x]);
            if (index > -1) {
                tabSphere.splice(index, 1);
            }
            initInfoHero("sphere", "+", 1);
            return true;
        }
    }
    return false;
}

// Check if we encounter a chest
function isStair(posX, posY) {
    for (var x = 0; x < tabStair.length; ++x) {
        if ((tabStair[x].posX === (posX / 16)) && (tabStair[x].posY === (posY / 16))) {
            // Supprime la case (dans le tableau) du chest qui vient d'être récupéré
            var index = tabStair.indexOf(tabStair[x]);
            if (index > -1) {
                tabStair.splice(index, 1);
            }
            initInfoHero("stage", "+", 1);
            return true;
        }
    }
    return false;
}

// Check if we encounter a clock
function isClock(posX, posY) {
    for (var x = 0; x < tabClock.length; ++x) {
        if ((tabClock[x].posX === (posX / 16)) && (tabClock[x].posY === (posY / 16))) {
            // Supprime la case (dans le tableau) du chest qui vient d'être récupéré
            var index = tabClock.indexOf(tabClock[x]);
            if (index > -1) {
                tabClock.splice(index, 1);
            }
            timeInfo.add = 30;
            changeTime();
            initInfoHero("clock", "+", 1);
            return true;
        }
    }
    return false;
}

// Play Background music
function playBackgroundAmbient() {
    var snd = new Audio("audio/background_ambient.mp3"); // buffers automatically when created
    snd.loop = true;
    snd.playbackRate = 1;
    snd.play();
}

// Play hit wall sound
function playHitWall() {
    var snd = new Audio("audio/hit_wall.wav"); // buffers automatically when created
    snd.play();
}

// Play hit wall sound
function playTrollKill() {
    var snd = new Audio("audio/troll_kill.wav"); // buffers automatically when created
    snd.play();
}

// Play hit wall sound
function playBuff() {
    var snd = new Audio("audio/buff.mp3"); // buffers automatically when created
    snd.playbackRate = 0.5;
    snd.play();
}

// Play hit debuff sound
function playDeBuff() {
    var snd = new Audio("audio/debuff.mp3"); // buffers automatically when created
    snd.play();
}

// Play hit chest found sound
function playChestFound() {
    var snd = new Audio("audio/chest_found.mp3"); // buffers automatically when created
    snd.volume = 0.5;
    snd.play();
}

// Play hit chest found sound
function playSphereFound() {
    var snd = new Audio("audio/sphere.mp3"); // buffers automatically when created
    snd.volume = 0.5;
    snd.play();
}

// Play hit chest found sound
function playClockFound() {
    var snd = new Audio("audio/clock.mp3"); // buffers automatically when created
    snd.volume = 0.3;
    snd.play();
}

// Play hit chest found sound
function playHealthLost() {
    var snd = new Audio("audio/healthLost.mp3"); // buffers automatically when created
    snd.volume = 0.5;
    snd.play();
}

// Play Game over
function playGameOver() {
    var snd = new Audio("audio/game-over.mp3"); // buffers automatically when created
    snd.play();
}

// Play Game over
function playLastSeconds() {
    var snd = new Audio("audio/last-seconds.wav"); // buffers automatically when created
    snd.play();
}

// lors d'un déplacement, vérifie la position pour prévoir un évènement
function checkNextPos(nextPosX, nextPosY) {
    var nextWall = isWall(nextPosX, nextPosY);
    var nextMonster = isMonster(nextPosX, nextPosY);
    var nextChest = isChest(nextPosX, nextPosY);
    var nextSphere = isSphere(nextPosX, nextPosY);
    var nextStair = isStair(nextPosX, nextPosY);
    var nextClock = isClock(nextPosX, nextPosY);

    if (nextMonster === true) {
        playTrollKill();
    } else if (nextMonster === "stronger") {
        if (heroInfo.healthPoint === 0) {
            playGameOver();
            clearInfoHero();
            gameInfo.stage = 1;
            gameInfo.timeRemaining = gameInfo.defaultTime;
            init();
            alert("Game Over - Score: " + heroInfo.score + " pts");
            return;
        } else {
            playHealthLost();
        }
    }
    if (nextChest === true) {
        playChestFound();
    }
    if (nextSphere === true) {
        playSphereFound();
    }
    if (nextStair === true) {
        init();
        return;
    }
    if (nextClock === true) {
        playClockFound();
    }
    if (!nextWall) {
        ctx.drawImage(floorImage, heroInfo.posX, heroInfo.posY);
        initHero(nextPosX, nextPosY, heroInfo.state);
        heroInfo.posX = nextPosX;
        heroInfo.posY = nextPosY;
    } else {
        playHitWall();
    }
}

// Update game objects
var update = function (keyCode) {
    if (keyCode === 38) { // Player press up
        checkNextPos(heroInfo.posX, heroInfo.posY - 16);
    }
    if (keyCode === 40) { // Player press down
        checkNextPos(heroInfo.posX, heroInfo.posY + 16);
    }
    if (keyCode === 37) { // Player press left
        checkNextPos(heroInfo.posX - 16, heroInfo.posY);
    }
    if (keyCode === 39) { // Player press right
        checkNextPos(heroInfo.posX + 16, heroInfo.posY);
    }
    if (keyCode === 90) { // Player press Z
        if (heroInfo.state === "normal") {
            heroInfo.state = "enraged";
            setTimeout(function () {
                heroInfo.state = "tired";
                initHero(heroInfo.posX, heroInfo.posY, heroInfo.state);
                playDeBuff();
            }, 10000);
            setTimeout(function () {
                heroInfo.state = "tired";
                initHero(heroInfo.posX, heroInfo.posY, heroInfo.state);
            }, 10050);
            setTimeout(function () {
                heroInfo.state = "normal";
                initHero(heroInfo.posX, heroInfo.posY, heroInfo.state);
            }, 13050);
            initHero(heroInfo.posX, heroInfo.posY, heroInfo.state);
            initInfoHero("enraged", "+", 1);
            playBuff();
        } else if (heroInfo.state === "enraged") {
            // TODO: Aléatoire entre 3 sons de furie
        }
    }
};
addEventListener("keydown", function (e) {
    if (heroInfo.state === "enraged") {
        update(e.keyCode);
    }
}, true);
addEventListener("keyup", function (e) {
    if (heroInfo.state === "normal") {
        update(e.keyCode);
    }
}, true);


function moveMonster() {
    
    okMove = false;
    for (var x = 0; x < tabMonster.length; ++x) {
        var randDirection = Math.floor((Math.random() * 4) + 1);
        oldPosX = tabMonster[x].posX * 16;
        oldPosY = tabMonster[x].posY * 16;
        newPosX = 0;
        newPosY = 0;
        
        newTabMonster = [];
        switch (randDirection) {
            // up
            case 1:
                var nextWall = isWall(tabMonster[x].posX, (tabMonster[x].posY * 16) - 16);
                if (!nextWall) {
                    newPosX = tabMonster[x].posX;
                    newPosY = tabMonster[x].posY - 1;
                    okMove = true;
                }
                break;
                // down
            case 2:
                var nextWall = isWall(tabMonster[x].posX * 16, (tabMonster[x].posY * 16) + 16);
                if (!nextWall) {
                    newPosX = tabMonster[x].posX;
                    newPosY = tabMonster[x].posY + 1;
                    okMove = true;
                }
                break;
                // left    
            case 3:
                var nextWall = isWall((tabMonster[x].posX * 16) - 16, tabMonster[x].posY * 16);
                if (!nextWall) {
                    newPosX = tabMonster[x].posX - 1;
                    newPosY = tabMonster[x].posY;
                    okMove = true;
                }
                break;
                // right
            case 4:
                var nextWall = isWall((tabMonster[x].posX * 16) + 16, tabMonster[x].posY * 16);
                if (!nextWall) {
                    newPosX = tabMonster[x].posX + 1;
                    newPosY = tabMonster[x].posY;
                    okMove = true;
                }
                break;
        }
        
        if (okMove) {
            ctx.drawImage(floorImage, oldPosX, oldPosY);
            ctx.drawImage(monsterImage, newPosX * 16, newPosY * 16);
            level = tabMonster[x].level;
            
            var blockInfo = {
                posX: newPosX * 16,
                posY: newPosY * 16,
                level: level
            };
            
            var index = tabMonster.indexOf(tabMonster[x]);
            if (index > -1) {
                tabMonster.splice(index, 1);
            }
            
            tabMonster.push(blockInfo);
            
            console.log(tabMonster);
            
            /*
            // Supprime la case (dans le tableau)
            tabMonster[index].posX =  newPosX * 16;
            tabMonster[index].posY =  newPosY * 16;
            tabMonster[index].level = level; */
        }
    }
}

setInterval(function () {
   moveMonster();
}, 3000);




function changeTime() {
    if (gameInfo.timeRemaining === "00:00:00") {
        alert("Game Over - Score: " + heroInfo.score + " pts");
        clearInfoHero();
        // Remise a defaut du Chrono
        gameInfo.timeRemaining = gameInfo.defaultTime;
        init();
    }

    var timeSplited = gameInfo.timeRemaining.split(':');
    var hour = timeSplited[0];
    var minute = timeSplited[1];
    var second = timeSplited[2];

    if (timeInfo.add > 0) {
        if (second >= 30) {
            minute++;
            second += (parseInt(second) - 30);
        } else {
            second += (parseInt(second) + 30);
        }
        timeInfo.add = 0;
    } else {
        second--;
        if (second === -1) {
            second = '59';
            minute--;
            if (minute === -1) {
                minute = '59';
                hour--;
            }
        }
    }

    hour = '0' + hour;
    hour = hour.toString().substr(-2, 2);
    minute = '0' + minute;
    minute = minute.toString().substr(-2, 2);
    second = '0' + second;
    second = second.toString().substr(-2, 2);
    gameInfo.timeRemaining = hour + ':' + minute + ':' + second;
    document.getElementById('time').innerHTML = "<b>" + gameInfo.timeRemaining + "</b>";
}
instance = self.setInterval("changeTime()", 1000);

function clear() {
    ctx.fillStyle = options.colors[helpers.TILE_TYPE.EMPTY];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGridLines() {
    var i = 0;
    ctx.beginPath();
    //draw grid
    for (i = 0; i < canvas.width; i += tiles.size.x) {// scale.x) {
        ctx.moveTo(0.5 + i, 0);
        ctx.lineTo(0.5 + i, canvas.height);
    }

    for (i = 0; i < canvas.height; i += tiles.size.y) {// scale.y) {
        ctx.moveTo(0, 0.5 + i);
        ctx.lineTo(canvas.width, 0.5 + i);
    }

    ctx.strokeStyle = options.colors.grid;
    ctx.stroke();
}

function drawGridMap(grid) {
    var xlen = grid.length,
            ylen = grid[0].length;
    tabWall = [];
    tabFloor = [];
    //draw dungeon grid
    for (var x = 0; x < xlen; ++x) {
        for (var y = 0; y < ylen; ++y) {
            var tile = grid[x][y];
            var blockInfo = {
                posX: x,
                posY: y,
                tile: tile
            };
            if (tile & helpers.TILE_TYPE.EMPTY)
                continue;
            if (tile & helpers.TILE_TYPE.FLOOR) {
                drawTile('floor', x, y);
                //ctx.fillStyle = options.colors[helpers.TILE_TYPE.FLOOR];
                tabFloor.push(blockInfo);
            }
            else if (tile & helpers.TILE_TYPE.WALL) {

                tabWall.push(blockInfo);
                var type = tile & helpers.CORNER ? 'corner' : 'wall';
                if (tile & helpers.DIRECTION.NORTH)
                    type += '_n';
                else if (tile & helpers.DIRECTION.SOUTH)
                    type += '_s';
                else if (tile & helpers.DIRECTION.EAST)
                    type += '_e';
                else if (tile & helpers.DIRECTION.WEST)
                    type += '_w';
                drawTile(type, x, y);
                //ctx.fillStyle = options.colors[helpers.TILE_TYPE.WALL];// '#424254';
                //ctx.fillRect(x * tiles.size.x, y * tiles.size.y, tiles.size.x, tiles.size.y);
            }

//ctx.fillRect(x * scale.x, y * scale.y, scale.x, scale.y);
        }
    }
}

function drawTile(type, x, y) {
    ctx.drawImage(
            texture,
            tiles[type].x,
            tiles[type].y,
            tiles.size.x,
            tiles.size.y,
            x * tiles.size.x,
            y * tiles.size.x,
            tiles.size.x,
            tiles.size.y
            );
}

function resize(skipRedraw) {
    canvas.width = tiles.size.x * options.size.x;
    canvas.height = tiles.size.y * options.size.y;
    if (!skipRedraw) {
        clearTimeout(resizeDrawTimeout);
        resizeDrawTimeout = setTimeout(function () {
            options.regenerate();
        }, resizeDrawWait);
    }
}

playBackgroundAmbient();
window.onload = init;

