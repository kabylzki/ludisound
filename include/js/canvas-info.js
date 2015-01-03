// Récupération du canvas d'information
canvasInfo = document.getElementById('canvas-info');
ctxInfo = canvasInfo.getContext('2d');

// TODO: fonction d'affichage d'un text (level, bonuslevel, Game over etc ..)
function drawText(text, duration, color) {
    ctxInfo.font = "50px Georgia";
    var gradient = ctxInfo.createLinearGradient(0, 0, canvasInfo.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "red");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctxInfo.fillStyle = gradient;
    ctxInfo.fillText("Bonus level !", 350, 256);
}