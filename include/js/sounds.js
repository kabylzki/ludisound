// Play Background music
function playBackgroundAmbient() {
    var snd = new Audio("include/audio/background_ambient.mp3"); // buffers automatically when created
    snd.loop = true;
    snd.playbackRate = 1;
    snd.play();
}

// Play hit wall sound
function playHitWall() {
    var snd = new Audio("include/audio/hit_wall.wav"); // buffers automatically when created
    snd.play();
}

// Play hit wall sound
function playTrollKill() {
    var snd = new Audio("include/audio/troll_kill.wav"); // buffers automatically when created
    snd.play();
}

// Play hit wall sound
function playBuff() {
    var snd = new Audio("include/audio/buff.mp3"); // buffers automatically when created
    snd.playbackRate = 0.5;
    snd.play();
}

// Play hit debuff sound
function playDeBuff() {
    var snd = new Audio("include/audio/debuff.mp3"); // buffers automatically when created
    snd.play();
}

// Play hit chest found sound
function playChestFound() {
    var snd = new Audio("include/audio/chest_found.mp3"); // buffers automatically when created
    snd.volume = 0.5;
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
