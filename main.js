addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        if ($('#tb_pseudo').val() != "") {
            pseudo = $('#tb_pseudo').val();
        } else {
            pseudo = "rakanoth" + (Math.floor(Math.random() * 1000));
        }

        heroInfo.pseudo = pseudo;
        document.getElementById('liste-info-game').style.visibility = "visible";
        document.getElementById('text-intro').innerHTML = "";
        init();
    }
}, true);

// Initialise une partie
function init() {
    // vide les tableaux avant la nouvelle partie ou le passage de niveau
    tabMonster = [];
    tabChest = [];
    tabSphere = [];
    tabStair = [];
    tabClock = [];
    tabPill = [];
    tabAlcool = [];

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
    initRandomImageObject(5, tabChest, chestImage);
    // Place 1 exit randomly
    initRandomImageObject(1, tabStair, stairImage);
    // Place 1 pill randomly with 20% chance (1 = 100%)
    initPill(0.20, ((Math.random() * 10) + 5) * 1000);
    // Place 1 alcool randomly with 20% chance (1 = 100%)
    initAlcool(0.20, ((Math.random() * 10) + 10) * 1000);

    // Place 1 sphere-level & 1 clock Si nous ne somme pas au premier niveau
    if (gameInfo.stage === 1) {
        gameInfo.timeRemaining = gameInfo.defaultTime;
    }

    initLevel(gameInfo.stage);

    /*
     ctx.font = "20px Georgia";
     ctx.fillStyle = "white";
     ctx.fillText("Hello World!", 10, 50);*/
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


function initMonster(posX, posY, level) {
    switch (level) {
        case 1:
            var image = monsterImage1;
            break;
        case 2:
            var image = monsterImage2;
            break;
        case 3:
            var image = monsterImage3;
            break;
        case 4:
            var image = monsterImage4;
            break;
        case 5:
            var image = monsterImage5;
            break;
        case 6:
            var image = monsterImage6;
            break;
        default:
            var image = monsterImage;
    }
    ctx.drawImage(image, posX, posY);
}

// initialise un objet avec un position définie
function initImageObject(posX, posY, tab, image, level) {
    if (posX === null)
        posX = 16 * 16;
    if (posY === null)
        posY = 16 * 16;
    if (level !== null) {
        var blockInfo = {
            posX: posX,
            posY: posY,
            level: level
        };
    } else {
        var blockInfo = {
            posX: posX,
            posY: posY
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
    ctx.drawImage(image, posX * 16, posY * 16);
}

// initialise un nombre d'objets avec une position aléatoire
function initRandomImageObject(cpt, tab, image, level, effect) {
    for (var x = 0; x < cpt; x++) {
        var randPos = Math.floor(Math.random() * tabFloor.length);
        var randPosX = tabFloor[randPos].posX;
        var randPosY = tabFloor[randPos].posY;
        // Si le level n'est pas null on l'ajoute à l'objet 
        var blockInfo = {
            posX: randPosX,
            posY: randPosY,
            level: level,
            effect: effect
        };
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

// initilise un pill avec un pourcentage d'apparition
function initPill(chance, duration) {
    if (tabPill.length < 1) {
        if (Math.random() < chance) {
            whichPill = Math.random();
            if (whichPill < 0.1) {
                initRandomImageObject(1, tabPill, pillTwinImage, null, 5);
            } else if (whichPill < 0.2) {
                initRandomImageObject(1, tabPill, pillBetaImage, null, 4);
            } else if (whichPill < 0.3) {
                initRandomImageObject(1, tabPill, pillRedImage, null, 3);
            } else if (whichPill < 0.5) {
                initRandomImageObject(1, tabPill, pillBlueImage, null, 2);
            } else if (whichPill <= 1) {
                initRandomImageObject(1, tabPill, pillYellowImage, null, 1);
            }
        }
        setTimeout(function () {
            if (tabPill.length === 1) {
                ctx.drawImage(floorImage, tabPill[0].posX * 16, tabPill[0].posY * 16);
                tabPill = [];
            }
        }, duration);
    }

}

// initilise un alcool avec un pourcentage d'apparition
function initAlcool(chance, duration) {
    if (tabAlcool.length < 1) {
        if (Math.random() < chance) {
            whichAlcool = Math.random();
            if (whichAlcool < 0.5) {
                initRandomImageObject(1, tabAlcool, alcoolRhum, null, 6);
            } else {
                initRandomImageObject(1, tabAlcool, alcoolVodka, null, 7);
            }
        }
        setTimeout(function () {
            if (tabAlcool.length === 1) {
                ctx.drawImage(floorImage, tabAlcool[0].posX * 16, tabAlcool[0].posY * 16);
                tabAlcool = [];
            }
        }, duration);
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
    document.getElementById("info-cleared").innerHTML = 0;
    document.getElementById("time").innerHTML = gameInfo.defaultTime;
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
            heroInfo.monsterKilled = operators[op](heroInfo.monsterKilled, nb);
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
        case "cleared":
            heroInfo.areaCleared = operators[op](heroInfo.areaCleared, nb);
            document.getElementById("info-cleared").innerHTML = heroInfo.areaCleared;
            break;
    }

    // Mise à jour du Score à chaque mise à jour d'info
    heroInfo.score = ((gameInfo.stage - 1) * 10) + (heroInfo.sphereLevel * 10) - (heroInfo.enragedUsed * 10) + (heroInfo.monsterKilled * 3) + (heroInfo.chestTaken * 6) + (heroInfo.areaCleared * 20);
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
function isMonster(posX, posY, type) {
    var my_return = true;
    for (var x = 0; x < tabMonster.length; ++x) {
        if ((tabMonster[x].posX === (posX / 16)) && (tabMonster[x].posY === (posY / 16))) {
            if (type === "hero") {
                // Si le monstre a un niveau supérieur Il nous enlève un point de vie.
                if (heroInfo.sphereLevel >= tabMonster[x].level) {
                    initInfoHero("monster", "+", 1);
                } else {
                    initInfoHero("health", "-", 1);
                    if (heroInfo.healthPoint === 1) {
                        playLowHealth();
                    }
                    my_return = "stronger";
                }

                // Supprime la case (dans le tableau)
                var index = tabMonster.indexOf(tabMonster[x]);
                if (index > -1) {
                    tabMonster.splice(index, 1);
                }
                return my_return;
            } else {
                return true;
            }
        }
    }
    return false;
}

// Check if a monster encounter a hero
function isHero(posX, posY, level, type) {
    if (posX === heroInfo.posX && posY === heroInfo.posY) {
        // Si le monstre a un niveau supérieur Il nous enlève un point de vie.
        if (heroInfo.sphereLevel >= level) {
            initInfoHero("monster", "+", 1);
            playKill();
            return "hero_stronger";
        } else {
            initInfoHero("health", "-", 1);
            if (heroInfo.healthPoint === 1) {
                playLowHealth();
            }
            playHealthLost();
            return "hero_weaker";
        }
    }

    return false;
}

// Check if we encounter a chest
function isChest(posX, posY, type) {
    for (var x = 0; x < tabChest.length; ++x) {
        if ((tabChest[x].posX === (posX / 16)) && (tabChest[x].posY === (posY / 16))) {
            if (type === "hero") {
                // Supprime la case (dans le tableau) du chest qui vient d'être récupéré
                var index = tabChest.indexOf(tabChest[x]);
                if (index > -1) {
                    tabChest.splice(index, 1);
                }
                initInfoHero("chest", "+", 1);
                return true;
            } else {
                return true;
            }
        }
    }
    return false;
}

// Check if we encounter a chest
function isSphere(posX, posY, type) {
    for (var x = 0; x < tabSphere.length; ++x) {
        if ((tabSphere[x].posX === (posX / 16)) && (tabSphere[x].posY === (posY / 16))) {
            if (type === "hero") {
                // Supprime la case (dans le tableau) du chest qui vient d'être récupéré
                var index = tabSphere.indexOf(tabSphere[x]);
                if (index > -1) {
                    tabSphere.splice(index, 1);
                }
                initInfoHero("sphere", "+", 1);
                return true;
            } else {
                return true;
            }
        }
    }
    return false;
}

// Check if we encounter a pill
function isPill(posX, posY, type) {
    for (var x = 0; x < tabPill.length; ++x) {
        if ((tabPill[x].posX === (posX / 16)) && (tabPill[x].posY === (posY / 16))) {
            if (type === "hero") {
                // Supprime la case (dans le tableau) de la pill qui vient d'être récupérée
                var index = tabPill.indexOf(tabPill[x]);
                if (index > -1) {
                    tabPill.splice(index, 1);
                }
                //initInfoHero("pill", "+", 1);
                return true;
            } else {
                return true;
            }
        }
    }
    return false;
}

// Check if we encounter an alcohol
function isAlcool(posX, posY, type) {
    for (var x = 0; x < tabAlcool.length; ++x) {
        if ((tabAlcool[x].posX === (posX / 16)) && (tabAlcool[x].posY === (posY / 16))) {
            if (type === "hero") {
                // Supprime la case (dans le tableau) de la pill qui vient d'être récupérée
                var index = tabAlcool.indexOf(tabAlcool[x]);
                if (index > -1) {
                    tabAlcool.splice(index, 1);
                }
                //initInfoHero("alcool", "+", 1);
                return true;
            } else {
                return true;
            }
        }
    }
    return false;
}

// Check if we encounter a chest
function isStair(posX, posY, type) {
    for (var x = 0; x < tabStair.length; ++x) {
        if ((tabStair[x].posX === (posX / 16)) && (tabStair[x].posY === (posY / 16))) {
            if (type === "hero") {
                // Supprime la case (dans le tableau) du stair
                var index = tabStair.indexOf(tabStair[x]);
                if (index > -1) {
                    tabStair.splice(index, 1);
                }

                if (tabMonster.length === 0) {
                    initInfoHero("cleared", "+", 1);
                }
                initInfoHero("stage", "+", 1);
                return true;
            } else {
                return true;
            }
        }
        return false;
    }
}

// Check if we encounter a clock
function isClock(posX, posY, type) {
    for (var x = 0; x < tabClock.length; ++x) {
        if ((tabClock[x].posX === (posX / 16)) && (tabClock[x].posY === (posY / 16))) {
            if (type === "hero") {
                // Supprime la case (dans le tableau) du chest qui vient d'être récupéré
                var index = tabClock.indexOf(tabClock[x]);
                if (index > -1) {
                    tabClock.splice(index, 1);
                }
                timeInfo.add = 30;
                changeTime();
                initInfoHero("clock", "+", 1);
                return true;
            } else {
                return true;
            }
        }
    }
    return false;
}


// lors d'un déplacement, vérifie la position pour prévoir un évènement
function checkNextPos(nextPosX, nextPosY) {
    var nextWall = isWall(nextPosX, nextPosY, "hero");
    var nextMonster = isMonster(nextPosX, nextPosY, "hero");
    var nextChest = isChest(nextPosX, nextPosY, "hero");
    var nextSphere = isSphere(nextPosX, nextPosY, "hero");
    var nextStair = isStair(nextPosX, nextPosY, "hero");
    var nextClock = isClock(nextPosX, nextPosY, "hero");
    var nextPill = isPill(nextPosX, nextPosY, "hero");
    var nextAlcool = isAlcool(nextPosX, nextPosY, "hero");

    if (nextMonster === true) {
        playKill();
    } else if (nextMonster === "stronger") {
        if (heroInfo.healthPoint < 1) {
            gameOver();
            return false;
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
    if (nextPill === true) {
        playPillFound();
    }
    if (nextAlcool === true) {
        playAlcoolFound();
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

// lors du déplacement d'un monster, vérifie la position pour prévoir un évènement
function checkNextPosMonster(nextPosX, nextPosY, level) {
    var nextWall = isWall(nextPosX, nextPosY, "monster");
    var nextMonster = isMonster(nextPosX, nextPosY, "monster");
    var nextChest = isChest(nextPosX, nextPosY, "monster");
    var nextSphere = isSphere(nextPosX, nextPosY, "monster");
    var nextStair = isStair(nextPosX, nextPosY, "monster");
    var nextClock = isClock(nextPosX, nextPosY, "monster");
    var nextHero = isHero(nextPosX, nextPosY, level, "monster");
    var nextPill = isPill(nextPosX, nextPosY, "monster");
    var nextAlcool = isAlcool(nextPosX, nextPosY, "monster");

    if (nextMonster === true) {
        return "monster";
    }
    if (nextChest === true) {
        return "chest";
    }
    if (nextSphere === true) {
        return "sphere";
    }
    if (nextStair === true) {
        return "stair";
    }
    if (nextClock === true) {
        return "clock";
    }
    if (nextPill === true) {
        return "pill";
    }
    if (nextAlcool === true) {
        return "alcool";
    }
    if (nextHero === "hero_stronger") {
        return "hero_stronger";
    } else if (nextHero === "hero_weaker") {
        if (heroInfo.healthPoint < 1) {
            gameOver();
            return false;
        }
        return "hero_weaker";
    }
    if (!nextWall) {
        return "floor";
    } else {
        return "wall";
    }
}

// Update game objects
var update = function (keyCode) {
    if (keyCode === 38) { // Player press up
        checkNextPos(heroInfo.posX, heroInfo.posY - 16);
        //initPill(0.005);

    }
    if (keyCode === 40) { // Player press down
        checkNextPos(heroInfo.posX, heroInfo.posY + 16);
        //initPill(0.005);

    }
    if (keyCode === 37) { // Player press left
        checkNextPos(heroInfo.posX - 16, heroInfo.posY);
        //initPill(0.005);
    }
    if (keyCode === 39) { // Player press right
        checkNextPos(heroInfo.posX + 16, heroInfo.posY);
        //initPill(0.005);
    }
    if (keyCode === 90) { // Player press Z
        if (heroInfo.state === "normal") {
            heroInfo.state = "enraged";
            setTimeout(function () {
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
        oldPosX = tabMonster[x].posX;
        oldPosY = tabMonster[x].posY;
        newPosX = 0;
        newPosY = 0;

        switch (randDirection) {
            // up
            case 1:
                var comingNext = checkNextPosMonster(tabMonster[x].posX * 16, (tabMonster[x].posY * 16) - 16, tabMonster[x].level);
                checkMove("up", comingNext, x);
                break;
                // down
            case 2:
                var comingNext = checkNextPosMonster(tabMonster[x].posX * 16, (tabMonster[x].posY * 16) + 16, tabMonster[x].level);
                checkMove("down", comingNext, x);
                break;
                // left    
            case 3:
                var comingNext = checkNextPosMonster((tabMonster[x].posX * 16) - 16, tabMonster[x].posY * 16, tabMonster[x].level);
                checkMove("left", comingNext, x);
                break;
                // right
            case 4:
                var comingNext = checkNextPosMonster((tabMonster[x].posX * 16) + 16, tabMonster[x].posY * 16, tabMonster[x].level);
                checkMove("right", comingNext, x);
                break;
        }

        if (okMove === true) {
            ctx.drawImage(floorImage, oldPosX * 16, oldPosY * 16);
            initMonster(newPosX * 16, newPosY * 16, tabMonster[x].level);

            var blockInfo = {
                posX: newPosX,
                posY: newPosY,
                level: tabMonster[x].level
            };

            var index = tabMonster.indexOf(tabMonster[x]);
            if (index > -1) {
                tabMonster.splice(index, 1);
            }

            tabMonster.push(blockInfo);

            // remet le okMove à 0
            okMove = false;
        }
    }
}

function checkMove(direction, nextComing, indexTab) {
    var theX = 0;
    var theY = 0;

    switch (direction) {
        case "up":
            theX = tabMonster[indexTab].posX;
            theY = tabMonster[indexTab].posY - 1;
            break;
        case "down":
            theX = tabMonster[indexTab].posX;
            theY = tabMonster[indexTab].posY + 1;
            break;
        case "left":
            theX = tabMonster[indexTab].posX - 1;
            theY = tabMonster[indexTab].posY;
            break;
        case "right":
            theX = tabMonster[indexTab].posX + 1;
            theY = tabMonster[indexTab].posY;
            break;
    }

    if (nextComing === "hero_stronger" || nextComing === "hero_weaker") {
        var index = tabMonster.indexOf(tabMonster[indexTab]);
        if (index > -1) {
            tabMonster.splice(index, 1);
        }
        ctx.drawImage(floorImage, oldPosX * 16, oldPosY * 16);
    } else if (nextComing === "floor") {
        newPosX = theX;
        newPosY = theY;
        okMove = true;
    } else {
        okMove = false;
    }
}

setInterval(function () {
    moveMonster();
}, 500);


function gameOver() {
    playGameOver();
    clearInfoHero();

    // enregistre le score avant la question ultime
    $.ajax({
        type: "POST",
        url: "save.php",
        data: {
            hero: heroInfo,
            stage: gameInfo.stage
        }
    });

    // réinitialise au premier niveau et au temps par défaut
    gameInfo.stage = 1;
    gameInfo.timeRemaining = gameInfo.defaultTime;

    // Confirme
    if (confirm("Game Over - Score: " + heroInfo.score + " pts")) {
        window.location.href = "purgatoire.php";
        return;
    } else {
        if (confirm("Votre score ne sera pas compté, êtes vous sur ?")) {
            window.location.href = "game.php";
        } else {
            window.location.href = "purgatoire.php";
        }
    }
}


playBackgroundAmbient();
//window.onload = init;