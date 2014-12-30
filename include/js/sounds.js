// Play Background music
function playBackgroundAmbient() {
    /*
    var snd = new Audio("include/audio/background_ambient.mp3"); // buffers automatically when created
    snd.loop = true;
    snd.playbackRate = 1;
    snd.play();
    */
}

// Play hit wall sound
function playHitWall() {
    var snd = new Audio("include/audio/hit_wall.wav"); // buffers automatically when created
    snd.play();
}

// Play hit wall sound
function playKill() {
    if (Math.random() < 0.5) {
        var snd = new Audio("include/audio/kill1.wav"); // buffers automatically when created
        snd.volume = 0.5;
    } else {
        var snd = new Audio("include/audio/kill2.mp3"); // buffers automatically when created
        snd.volume = 0.2;
    }
    snd.play();
}

// Play hit wall sound
function playBuff() {
    var snd = new Audio("include/audio/buff.mp3"); // buffers automatically when created
    snd.playbackRate = 0.5;
    snd.volume = 0.5;
    snd.play();
}

// Play hit debuff sound
function playDeBuff() {
    var snd = new Audio("include/audio/debuff.mp3"); // buffers automatically when created
    snd.volume = 0.4;
    snd.play();
}

// Play hit chest found sound
function playChestFound() {
    var rand = Math.random();
    if (rand < 0.33) {
        var snd = new Audio("include/audio/chest1.mp3"); // buffers automatically when created
    } else if (rand < 0.66) {
        var snd = new Audio("include/audio/chest2.mp3"); // buffers automatically when created
    } else {
        var snd = new Audio("include/audio/chest3.mp3"); // buffers automatically when created
    }
    snd.play();
}

// Play hit chest found sound
function playSphereFound() {
    var snd = new Audio("include/audio/sphere.mp3"); // buffers automatically when created
    snd.volume = 0.5;
    snd.play();
}

// Play hit chest found sound
function playClockFound() {
    var snd = new Audio("include/audio/clock.mp3"); // buffers automatically when created
    snd.volume = 0.3;
    snd.play();
}

// Play hit chest found sound
function playHealthLost() {
    var snd = new Audio("include/audio/healthLost.mp3"); // buffers automatically when created
    snd.volume = 0.5;
    snd.play();
}

// Play Game over
function playGameOver() {
    var snd = new Audio("include/audio/game-over.mp3"); // buffers automatically when created
    snd.volume = 0.5;
    snd.play();
}

// Play Game over
function playLastSeconds() {
    var snd = new Audio("include/audio/last-seconds.wav"); // buffers automatically when created
    snd.play();
}

// Health Low
function playLowHealth() {
    var snd = new Audio("include/audio/heartbeat.mp3"); // buffers automatically when created
    snd.loop = true;
    snd.play();
}

// Pill Found
function playPillFound() {
    var snd = new Audio("include/audio/pill.mp3"); // buffers automatically when created
    snd.volume = 0.3;
    snd.play();
}

// Alcool Found
function playAlcoolFound() {
    if (Math.random() < 0.5) {
        var snd = new Audio("include/audio/alcool1.mp3"); // buffers automatically when created
        snd.volume = 0.3;
    } else {
        var snd = new Audio("include/audio/alcool2.mp3"); // buffers automatically when created
        snd.volume = 0.3;
    }
    snd.play();
}
