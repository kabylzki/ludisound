// Effectue une opération arithmétique entre 2 variables
operators = {
    '+': function (a, b) {
        return a + b;
    },
    '-': function (a, b) {
        return a - b;
    }
};

// Fade in visu drunk
function fadeInVisuelDrunk(duree) {
    $("#image-drunk-smoke").fadeIn(duree);
    $("#image-drunk").fadeIn(duree);
}

// Fade out visu drunk
function fadeOutVisuelDrunk(duree) {
    $("#image-drunk-smoke").fadeOut(duree);
    $("#image-drunk").fadeOut(duree);
}

